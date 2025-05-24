
import Images from "./Images";
import { Link } from 'react-router-dom';

//featured post component

function FeaturedPost() {

    return (
        <div className='mt-8 flex flex-col lg:flex-row gap-8'  >

            {/* first  */}
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>

                {/* images  */}
                <Images src="featured2.jpeg" className='rounded-3xl object-cover' w="895" />

                {/* details  */}
                <div className='flex items-center gap-4'>
                    <h1 className='font-semibold lg:text-lg'>01.</h1>
                    <Link to="/" className='text-blue-800 lg:text-lg'>Web-Designe</Link>
                    <span className='text-gray-500'>2 days ago</span>
                </div>

                {/* img1-tittel  */}
                <Link to="/test"
                    className='text-xl lg:text-3xl font-semibold lg:font-bold'>
                    Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                </Link>

            </div>



            {/* other-div-images */}
            <div className='w-full lg:w-1/2 flex flex-col gap-4'>


                {/* images 1-div */}
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    {/* images  */}
                    <div className='w-1/2 aspect-video'>
                        <Images src="featured2.jpeg" className='rounded-2xl object-cover w-full h-full' w="298" />
                    </div>
                    {/* details and tittle  */}
                    <div className=' w-2/3'>

                        {/* details of images 1 div  */}
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link to="/test" className='text-blue-800'>Web-Designe</Link>
                            <span className='text-gray-500 text-sm'>2 days ago</span>
                        </div>

                        {/* tittle of images 1 */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl-text-2xl font-medium"> ipsum dolor sit amet.Lorem ipsum dolor sit amet.</Link>
                    </div>


                </div>

                {/* images-2-div  */}
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    {/* images  */}
                    <div className='w-1/2 aspect-video'>
                        <Images src="featured2.jpeg" className='rounded-2xl object-cover w-full h-full' w="298" />
                    </div>

                    {/* details and tittle  */}
                    <div className=' w-2/3'>

                        {/* details of images 1 div  */}
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link to="/test" className='text-blue-800'>Web-Designe</Link>
                            <span className='text-gray-500 text-sm'>2 days ago</span>
                        </div>

                        {/* tittle of images 1 */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl-text-2xl font-medium"> ipsum dolor sit amet.Lorem ipsum dolor sit amet.</Link>
                    </div>


                </div>

                {/* images-3  */}
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    {/* images  */}
                    <div className='w-1/2 aspect-video'>
                        <Images src="featured2.jpeg" className='rounded-2xl object-cover w-full h-full' w="298" />
                    </div>

                    {/* details and tittle  */}
                    <div className=' w-2/3'>

                        {/* details of images 1 div  */}
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link to="/test" className='text-blue-800'>Web-Designe</Link>
                            <span className='text-gray-500 text-sm'>2 days ago</span>
                        </div>

                        {/* tittle of images 1 */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl-text-2xl font-medium"> ipsum dolor sit amet.Lorem ipsum dolor sit amet.</Link>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default FeaturedPost