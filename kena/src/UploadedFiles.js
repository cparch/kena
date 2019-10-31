import React from 'react';
import UploadedFileForm from './UploadedFileForm.js';
import './UploadedFiles.css';

const UploadedFiles = (props) => {
  let list = props.UploadedFiles.map((file, idx) => {

    let ShowUploadedFileForm = null
    let customClass = 'fileName'

    if(file.showEditForm){
      customClass= 'fileName fileNameClicked'
      ShowUploadedFileForm = <UploadedFileForm  
        FileFromHandler={props.FileFromHandler} 
        idx={idx}
        fileName={file.customName}
        fileComment={file.comment}
      />
    }

    return(
        <li key={file.customName}>
          <div
            onClick={() => props.showEditFileFormHandler(idx)}
            className={customClass}
          >
            {file.customName}
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