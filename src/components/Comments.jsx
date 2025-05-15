import React from 'react'
import CommentShow from './CommentShow'

function Comments() {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
        <h1 className='underline text-xl text-gray-500 '>Comments</h1>
        <div className='flex items-center justify-between gap-8 w-full'>
            <textarea name="" placeholder='Write a Comment...' className='bg-white p-4 rounded-xl w-full'/>
            <button className='bg-blue-800 px-4 py-3 text-white font-medium rounded-xl hover:bg-blue-900'>Send</button>

        </div> 
        {/* comment list  */}
        <CommentShow/>
        <CommentShow/>
        <CommentShow/>
        <CommentShow/>
        <CommentShow/>
        <CommentShow/>
       
       
    </div>
  )
}

export default Comments