import React from 'react';

const NoteItem = (props) => (
  <li id={props.note.id} onClick={props.handleNoteListSelect}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.slice(0, 15)}...</p>
  </li>
);

export default NoteItem;
