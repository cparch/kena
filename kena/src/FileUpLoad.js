import React from 'react';
import './FileUpLoad.css';

const FileUpLoad = (props) => {

  return (
    <div className="upload-btn-wrapper">
      <button className="btn">Upload a file</button>
      <input 
        type="file" 
        onChange={props.upLoadHandler} 
        id="avatar" 
        name="avatar"
        accept="audio/*"
      />
    </div>
  )
};

export default FileUpLoad;