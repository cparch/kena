import React from 'react';
import './App.css';
import FileUpLoad from './FileUpLoad.js';
import UploadedFiles from './UploadedFiles.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      uploadedFiles: [],
    }
    this.showEditFileFormHandler = this.showEditFileFormHandler.bind(this);
    this.upLoadHandler = this.upLoadHandler.bind(this);
    this.FileFromHandler = this.FileFromHandler.bind(this);
  }

  
  FileFromHandler(idx, event){
    let updatedUploadedFiles = [...this.state.uploadedFiles];
    updatedUploadedFiles[idx][event.target.name] = event.target.value

    this.setState({
      uploadedFiles: updatedUploadedFiles
    })
  }

  showEditFileFormHandler(idx){
    let updatedUploadedFiles = [...this.state.uploadedFiles];
    updatedUploadedFiles[idx].showEditForm = true

    this.setState({
      uploadedFiles: updatedUploadedFiles
    })
  }

  upLoadHandler(event){
    let updatedUploadedFiles = [...this.state.uploadedFiles];
    let newFileObj = event.target.files[0]
    newFileObj.comment = '';
    newFileObj.showEditForm = false;
    updatedUploadedFiles.push(newFileObj);

    this.setState({
      uploadedFiles: updatedUploadedFiles
    })
  }

  render(){

    return (
      <div>
        <UploadedFiles
          UploadedFiles={this.state.uploadedFiles}
          showEditFileFormHandler={this.showEditFileFormHandler}
          FileFromHandler={this.FileFromHandler}
        />
        <FileUpLoad
          upLoadHandler={this.upLoadHandler}
        />
      </div>
    );
  }
}

export default App;
