import React from 'react'

function EditPage({blogId}) {
  if(blogId){
    //get the blog
  }

  return (
    
    <div>EditPage
        < form action='' method='post' className='form-body'>
            <label class = 'form-label'>Blog Title: <input type="text" /></label>
            <label class = 'form-label'>Description: <input type="text" /></label>
            <label class = 'form-label'>Blog Text: <input type='file' /></label> 
            <label class = 'form-label'>Blog Image: <input type='file' /></label>

            
            <button>Submit</button>
        </form>
    </div>
  )
}

export default EditPage