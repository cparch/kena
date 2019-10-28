import React from 'react';
import UploadedFileForm from './UploadedFileForm.js';
import './UploadedFiles.css';

const UploadedFiles = (props) => {
  let list = props.UploadedFiles.map((file, idx) => {

    let ShowUploadedFileForm = null
    let customClass = null

    if(file.showEditForm){
      customClass= 'fileName'
      ShowUploadedFileForm = <UploadedFileForm  
        FileFromHandler={props.FileFromHandler} 
        idx={idx}
        fileName={file.name}
        fileComment={file.comment}
      />
    }

    return(
        <li key={file.name}>
          <div
            onClick={() => props.showEditFileFormHandler(idx)}
            className={customClass}
          >
            {file.name}
          </div>
          {ShowUploadedFileForm}
        </li>   
    )
  })

  return(
    <div className='FileNamelistContainer'>
        <div>Uploaded Files:</div>
        <ul >
          {list}
        </ul>
    </div>
  )
};

export default UploadedFiles;