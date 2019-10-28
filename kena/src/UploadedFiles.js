import React from 'react';
import UploadedFileForm from './UploadedFileForm.js';

const UploadedFiles = (props) => {
  let list = props.UploadedFiles.map((file, idx) => {
    let ShowUploadedFileForm = null
    if(file.showEditForm){
      // ShowUploadedFileForm = <UploadedFileForm onChange={() => props.FileFromHandler(idx)}/>
      ShowUploadedFileForm = <UploadedFileForm  FileFromHandler={props.FileFromHandler} idx={idx}/>

    }

    return(
      <div key={file.name} onClick={() => props.showEditFileFormHandler(idx)}>
        {file.name}
        {ShowUploadedFileForm}
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