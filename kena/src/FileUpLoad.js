import React from 'react';

const FileUpLoad = (props) => {
  return (
    <div>
      <label  for="avatar">Choose an audio file to upload: </label>
      <input
        onChange={props.upLoadHandler} 
        type="file"
        id="avatar" 
        name="avatar"
        accept="audio/*"
      />
    </div>
  )
};

export default FileUpLoad;