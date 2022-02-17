import React from 'react';
import { makeStyles } from '@mui/styles';
import {Button} from '@mui/material';

const useStyles = makeStyles({
    buttonGroup:{
        float:'right',
        marginRight:'30px'
    }
});
interface INoteActions {
    addNote:()=>void;
}

const NoteActions: React.FC<INoteActions> = ({addNote}) => {
    const classes = useStyles();
    return <div className={classes.buttonGroup}><Button variant="contained" onClick={addNote}>Add note</Button></div>

}

export default NoteActions;