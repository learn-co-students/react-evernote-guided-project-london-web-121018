import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar
          notesToPassToSidebarItem={this.props.theThingWeArePassing}
          handleNoteClickForContent={this.props.handleNoteClickForContent}
          />
          <Content
          selectedNotePassingToContent={this.props.selectedNotePassingToContainer}
          handleEditClick={this.props.handleEditClick}
          showEdit={this.props.showEdit}
          handleSaveClick={this.props.handleSaveClick}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
