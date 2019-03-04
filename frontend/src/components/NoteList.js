import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.thingToPassToNoteList.map(note => <NoteItem note={note} handleClick={props.handleNoteClickForContent} />)}
    </ul>
  );
}

export default NoteList;
