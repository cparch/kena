import React from 'react';

const FileUpLoad = (props) => {
  return (
    <div>
      <label  for="avatar">Choose a profile picture:</label>
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