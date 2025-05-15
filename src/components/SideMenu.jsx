import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'


function SideMenu() {
    return (
        <div className='px-4 h-max sticky top-8 '>

            <h1 className='mb-4 text-sm font-medium'>Search</h1>
            <Search />

            {/* filter option  */}
            <h1 className='mt-4 text-sm font-medium'>Filter</h1>

            <div className='flex flex-col gap-2 text-sm'>

                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                   <input type="radio" 
                   name='sort' 
                   value="newest" 
                   className='appearance-none w-4 h-4 border-[1.5px] border-bue-800 cursor-pointer  bg-white rounded-sm checked:bg-blue-600'  /> 
                   Newest
                </label>

                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                   <input type="radio" 
                   name='sort' 
                   value="Most-Popular" 
                   className='appearance-none w-4 h-4 border-[1.5px] border-bue-800 cursor-pointer bg-white rounded-sm checked:bg-blue-600'  /> 
                   Most-Popular
                </label>

                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                   <input type="radio" 
                   name='sort' 
                   value="Tranding" 
                   className='appearance-none w-4 h-4 border-[1.5px] border-bue-800  bg-white cursor-pointer rounded-sm checked:bg-blue-600'  /> 
                   Tranding
                </label>

                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                   <input type="radio" 
                   name='sort' 
                   value="oldest" 
                   className='appearance-none w-4 h-4 border-[1.5px] border-bue-800 cursor-pointer  bg-white rounded-sm checked:bg-blue-600'  /> 
                   oldest
                </label>
                

            </div>

            {/* categoreis-otion  */}
            <h1 className='mt-4 text-sm font-medium'>Categories</h1>
            <div className='flex flex-col gap-2 text-sm'>
                <Link to='/Posts' className='underline'>All</Link>
                <Link to='/Posts?cat=web-Designe' className='underline'>Web Designe</Link>
                <Link to='/Posts?cat=Development' className='underline'>Development</Link>
                <Link to='/Posts?cat=database' className='underline'>database</Link>
                <Link to='/Posts?cat=search-engine' className='underline'>Search-engines</Link>
                <Link to='/Posts?cat=marketing' className='underline'>Marketing</Link>

            </div>
        </div>
    )
}

export default SideMenu