import React from 'react';
import './UploadedFileForm.css';

const UploadedFileForm = (props) => {
  return (
    <form className='formContainer'>

      <label >
          <div className='inputTitle'> name: </div>
          <input 
            name='name'
            onChange={(event) => props.FileFromHandler(props.idx, event)}
            type='text'
            value={props.fileName}
          />
      </label>

      <br/>
      <br/>

      <label>
        <div className='inputTitle'>Comments about uploaded File:</div>
        <textarea 
          name='comment'
          rows="4" 
          cols="50"
          onChange={(event)=> props.FileFromHandler(props.idx, event)} 
          value={props.fileComment}
        />
      </label>
    </form>
  )
};

export default UploadedFileForm;