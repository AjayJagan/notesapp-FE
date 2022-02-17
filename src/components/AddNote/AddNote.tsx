import React, { useEffect, useState } from 'react';
import { Paper, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import NoteActions from '../NoteActions/NoteActions';
import axios from 'axios';
import { Note } from '../NotesApp/NotesApp';

const useStyles = makeStyles({
    paper: {
        width: '450px',
        height: '350px'
    }
});

interface IAddNote {
    setNotesList: React.Dispatch<React.SetStateAction<Note[]>>;
}

const AddNote: React.FC<IAddNote> = ({ setNotesList }) => {
    const [title, setTitle] = useState<string>('');
    const [note, setNote] = useState<string>('');
    const classes = useStyles();

    const addNote = () => {
        if (title.length > 0 && note.length > 0) {
            axios.post('http://localhost:3000/addNote', {
                title,
                note
            }).then((response) => {
                // append to existing notes
                setNotesList((prev) => [...prev, response.data])
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setTitle('');
                setNote('');
            })
        }
    };

    return <Paper elevation={3} className={classes.paper}>
        <TextField sx={{ margin: '15px 15px 15px 15px', width: '90%' }} label="Title" variant="filled" onChange={(e) => setTitle(e.target.value)} />
        <TextField sx={{ margin: '15px 15px 15px 15px', width: '90%' }} variant="outlined" multiline rows={6} onChange={(e) => setNote(e.target.value)} />
        <NoteActions addNote={addNote} />
    </Paper>

}

export default AddNote;