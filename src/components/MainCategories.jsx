import React from 'react'
import { Link } from 'react-router-dom'



// homepage main categories 

function MainCategories() {

    return (
        <div className=' hidden md:flex bg-white rounded-3xl  xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>

            {/* links  */}
            <div className='flex-1 flex items-center justify-between flex-wrap'>
                <Link to="/posts" className='bg-blue-800 text-white rounded-full px-4 py-2'>All Posts</Link>
                <Link to="/posts?cat=web-design" className=' hover:bg-blue-50 rounded-full  px-4 py-2'>Web Design</Link>
                <Link to="/posts?cat=Development" className=' hover:bg-blue-50 rounded-full px-4 py-2'>Development</Link>
                <Link to="/posts?cat=DataBase" className=' hover:bg-blue-50 rounded-full px-4 py-2'>DataBase</Link>
                <Link to="/posts?cat=Search Engine" className=' hover:bg-blue-50 rounded-full px-4 py-2'>Search Engine</Link>
                <Link to="/posts?cat=Markting" className=' hover:bg-blue-50 rounded-full px-4 py-2'>Markting</Link>
            </div>

            <span className='text-xl font-medium'>|</span>

            {/* search  */}
            <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    width="24"
                    height="24">

                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
                    />
                </svg>
                {/* search input  */}

                <input
                    type="text"
                    placeholder='search a post'
                    className='bg-transparent focus:outline-none'
                />

            </div>


        </div>
    )
}

export default MainCategories