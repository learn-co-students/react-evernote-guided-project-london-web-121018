import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList
        thingToPassToNoteList={this.props.notesToPassToSidebarItem}
        handleNoteClickForContent={this.props.handleNoteClickForContent}
        />
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
