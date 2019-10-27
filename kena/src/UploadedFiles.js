import React from 'react';

const UploadedFiles = (props) => {
  let list = props.UploadedFiles.map(file => {
    return(
      <div>
        {file.name}
      </div>
    )
  })
  return(
    <div>
      {list}
    </div>
  )
};

export default UploadedFiles;