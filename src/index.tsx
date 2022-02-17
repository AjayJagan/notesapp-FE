import React from 'react';
import ReactDOM from 'react-dom';
import NotesApp from './components/NotesApp/NotesApp';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteDisplay from './components/NoteDisplay/NoteDisplay';


ReactDOM.render(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<NotesApp />} />
        <Route path="/note/:noteId" element={<NoteDisplay />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('app'));