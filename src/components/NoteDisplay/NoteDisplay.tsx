import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Paper } from '@mui/material';

const NoteDisplay = () => {
    const { noteId } = useParams();
    const [note, setNote] = useState(null);
    useEffect(() => {
        if (noteId) {
            axios.get(`/api/getNote/${noteId}`).then(response => setNote(response.data)).catch((e) => console.log(e));
        }
    }, [])
    if (note) {
        return <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}><Paper sx={{
            marginTop:'10%',
            width: '400px',
            height: '500px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center'
        }}>
            <p style={{height:'75%',overflowY:'auto', paddingLeft:'40px', paddingRight:'40px'}}>{note.note}</p>
        </Paper>
        </div>
    }
    return <div></div>
}

export default NoteDisplay;