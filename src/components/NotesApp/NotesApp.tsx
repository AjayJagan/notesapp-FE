import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles'
import NotesList from '../NotesList/NotesList';
import AddNote from '../AddNote/AddNote';
import axios from 'axios';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px'
    }
});

export interface Note {
    _id?: string;
    title: string;
    note: string;
}

const NotesApp: React.FC = () => {
    const [notesList, setNotesList] = useState<Note[]>([]);

    useEffect(() => {
        if (!notesList.length) {
            axios.get('http://localhost:3000/getNotes').then((response) => {
                //update the list of notes
                setNotesList(response.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, []);

    const handleDelete = (noteId: string) => {
        axios.delete(`http://localhost:3000/deleteNote/${noteId}`).then((response) => {
            const updatedNotesList = [...notesList].filter((note) => note._id !== noteId);
            setNotesList(updatedNotesList);
        }).catch(error => {
            console.log(error)
        })
    }


    const classes = useStyles();
    return <div className={classes.container}>
        <AddNote setNotesList={setNotesList} />
        <NotesList notesList={notesList} handleDelete={handleDelete} />
    </div>
}

export default NotesApp;