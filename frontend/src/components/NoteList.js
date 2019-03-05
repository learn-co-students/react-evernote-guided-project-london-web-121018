import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  let allNotes = () => {
    return props.notes.map(n => <NoteItem note={n} selectNote={props.selectNote} />)
  }
  return (
    <ul>
      {allNotes()}
    </ul>
  );
}

export default NoteList;
