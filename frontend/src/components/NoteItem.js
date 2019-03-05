import React from 'react';

const NoteItem = (props) => {

  let truncatedBody = note => {
    let splitBody = note.body.split(" ")
    let truncatedBody = `${splitBody[0]} ${splitBody[1]}...`
    return truncatedBody
  }

  return (

    <li
      onClick={() => props.selectNote(props.note)}>
      <h2>{props.note.title}</h2>
      <p>{truncatedBody(props.note)}</p>
    </li>
  )
};

export default NoteItem;
