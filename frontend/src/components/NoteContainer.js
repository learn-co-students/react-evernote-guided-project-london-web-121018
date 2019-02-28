import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {
    return (
      <Fragment>
        <Search handleSearchInput={this.props.handleSearchInput}/>
        <div className='container'>
          <Sidebar notes={this.props.notes} 
          handleNoteListSelect={this.props.handleNoteListSelect}
          newNoteFetch={this.props.newNoteFetch}
          />


          <Content viewNote={this.props.viewNote} 
          editNote={this.props.editNote}
          handleEditRender={this.props.handleEditRender}
          reRenderNoteView={this.props.reRenderNoteView}
          patchNoteEdit={this.props.patchNoteEdit}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
