import React from 'react';

const UploadedFileForm = (props) => {
  return (
    // <form onSubmit={this.handleSubmit}>
    <form>
      <label>
          File name: 
          <input 
          name='name'
          onChange={(event) => props.FileFromHandler(props.idx, event)}
          type='text'/>
      </label>

      <br/>
      <br/>

      <label>
        Comments about uploaded File:
        <textarea 
          name='comment'
          rows="4" 
          cols="50"
          onChange={(event)=> props.FileFromHandler(props.idx, event)} 
        />
      </label>
      <input 
        
        type="submit" 
        value="Submit" 
      />
    </form>
  )
};

export default UploadedFileForm;