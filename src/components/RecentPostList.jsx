import React from 'react'
import PostListItems from './PostListItems'

function RecentPostList() {

  return (
    <div className='flex flex-col gap-12 mb-8'>
        {/* singlepostlist using component post list items   */}
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>

    </div>
  )
}

export default RecentPostList