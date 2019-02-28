import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {
        props.notes.map((note, idx )=>{
        return <NoteItem key={idx} note={note} handleNoteListSelect={props.handleNoteListSelect}/>
      })
      }
    </ul>
  );
}

export default NoteList;
