import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileUpLoad from './FileUpLoad.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      uploadedFiles: [],
    }
    this.upLoadHandler = this.upLoadHandler.bind(this);
  }

  upLoadHandler(event){
    // console.log(event.target.files[0])
    let updatedUploadedFiles = [...this.state.uploadedFiles];
    updatedUploadedFiles.push(event.target.files[0]);

    this.setState({
      uploadedFiles: updatedUploadedFiles
    })
  }

  render(){
    {console.log('test', this.state.uploadedFiles)}
    return (
      <div>
        <FileUpLoad
          upLoadHandler={this.upLoadHandler}
        />
      </div>
    );
  }
}

export default App;
