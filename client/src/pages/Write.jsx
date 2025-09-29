import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  console.log(value)
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display: 'none'}} type="file" name="" id="file" />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Publish</button>
          </div>
        </div>
        <div className="category">
          <h1>Category</h1>
        <div className="items">
          <div className='cat'><input type='radio' name='cat' value="art" id='art' />
          <label htmlFor="art">Art</label></div>

          <div className='cat'><input type='radio' name='Engineering' value="Engineering" id='Engineering' />
          <label htmlFor="art">Engineering</label></div>
         
          <div className='cat'><input type='radio' name='medical' value="medical" id='medical' />
          <label htmlFor="art">Medical</label></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Write