import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.viewNote.title}</h2>
      <p>{props.viewNote.body}</p>
      <button onClick={props.handleEditRender}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
