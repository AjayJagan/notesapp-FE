import React from 'react';
import { Paper, List, ListItem, IconButton, Avatar, ListItemText, ListItemAvatar,Link } from '@mui/material'
import { DeleteTwoTone, EventNote } from '@mui/icons-material';
import { makeStyles } from '@mui/styles'
import { Note } from '../NotesApp/NotesApp';
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
    notesContainer: {
        marginTop: '100px',
        width: '800px',
        height: '500px'
    }
});

interface INotesList {
    notesList: Note[];
    handleDelete:(noteId:string)=>void;
}

const NotesList: React.FC<INotesList> = ({ notesList, handleDelete }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleNoteClick =(noteId:string) =>{
        navigate(`/note/${noteId}`)
    }

    return <Paper elevation={3} className={classes.notesContainer}>
        <List sx={{margin:"50px", height:"80%", overflowY:"auto"}}>
            {notesList.map((note,i) => {
                return <ListItem
                    key={i}
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={()=>handleDelete(note._id)}>
                            <DeleteTwoTone />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar>
                            <EventNote color='info'/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Link onClick={()=>handleNoteClick(note._id)}>{note.title}</Link>}
                    />
                </ListItem>
            })}
        </List>
    </Paper>
}

export default NotesList;