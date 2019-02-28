import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';


class Content extends Component {
  

  renderContent = () => {
    if((this.props.viewNote ===null) && (this.props.editNote === null)){
      return <Instructions />

    }
    else if(this.props.editNote ===null ){
      return <NoteViewer viewNote={this.props.viewNote} handleEditRender={this.props.handleEditRender}/>
    }
    else if(this.props.viewNote == null){
      return <NoteEditor 
        editNote={this.props.editNote} 
        reRenderNoteView={this.props.reRenderNoteView}
        patchNoteEdit={this.props.patchNoteEdit}
        />
    }

  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
        
      </div>
    );
  }
}

export default Content;
