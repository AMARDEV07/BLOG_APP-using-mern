import { Link } from "react-router-dom";
import Images from "../components/Images";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/search";
import Comments from "../components/Comments";
      


function SinglePostPage() {
  return (
    <div className=" flex flex-col gap-8 ">

      {/* details-div */}
      <div className="flex gap-8">
        {/* details- */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            doloremque.
          </h1>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>written by</span>
            <Link to="/test" className="text-blue-800">
              {" "}
              Aman panwar
            </Link>
            <span>on</span>
            <Link to="/test" className="text-blue-800">
              web Design
            </Link>
            <span>2 days ago</span>
          </div>

          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            aperiam eaque cumque quo quisquam quos quidem fuga officia ipsam
            doloremque.
          </p>
        </div>

        {/* images  */}
        <div className="hidden lg:block w-2/5">
          <Images src="featured1.jpeg" className="rounded-2xl" w="600" />
        </div>
      </div>

      {/* content--  */}
      <div className="flex flex-col md:flex-row gap-12">

        {/* text  */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            facere sint, velit molestiae qui doloremque debitis quam corrupti
            cumque, cum vero ex repellat deleniti consectetur eveniet id aliquid
            nesciunt? Voluptate.l Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dolore facere sint, velit molestiae qui doloremque
            debitis quam corrupti cumque, cum vero ex repellat deleniti
            consectetur eveniet id aliquid nesciunt? Voluptate.l
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            facere sint, velit molestiae qui doloremque debitis quam corrupti
            cumque, cum vero ex repellat deleniti consectetur eveniet id aliquid
            nesciunt? Voluptate.l Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dolore facere sint, velit molestiae qui doloremque
            debitis quam corrupti cumque, cum vero ex repellat deleniti
            consectetur eveniet id aliquid nesciunt? Voluptate.l
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            facere sint, velit molestiae qui doloremque debitis quam corrupti
            cumque, cum vero ex repellat deleniti consectetur eveniet id aliquid
            nesciunt? Voluptate.l Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dolore facere sint, velit molestiae qui doloremque
            debitis quam corrupti cumque, cum vero ex repellat deleniti
            consectetur eveniet id aliquid nesciunt? Voluptate.l
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            facere sint, velit molestiae qui doloremque debitis quam corrupti
            cumque, cum vero ex repellat deleniti consectetur eveniet id aliquid
            nesciunt? Voluptate.l Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dolore facere sint, velit molestiae qui doloremque
            debitis quam corrupti cumque, cum vero ex repellat deleniti
            consectetur eveniet id aliquid nesciunt? Voluptate.l
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            facere sint, velit molestiae qui doloremque debitis quam corrupti
            cumque, cum vero ex repellat deleniti consectetur eveniet id aliquid
            nesciunt? Voluptate.l Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dolore facere sint, velit molestiae qui doloremque
            debitis quam corrupti cumque, cum vero ex repellat deleniti
            consectetur eveniet id aliquid nesciunt? Voluptate.l
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            facere sint, velit molestiae qui doloremque debitis quam corrupti
            cumque, cum vero ex repellat deleniti consectetur eveniet id aliquid
            nesciunt? Voluptate.l Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dolore facere sint, velit molestiae qui doloremque
            debitis quam corrupti cumque, cum vero ex repellat deleniti
            consectetur eveniet id aliquid nesciunt? Voluptate.l
          </p>
        </div>

        {/* menu-------------------  */}
        <div className="px-4 h-max sticky top-8">

          <h1 className=" mb-4 text-sm font-medium">Author</h1>

          <div className=" flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <Images
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link to="" className="text-blue-800"> Aman Panwar</Link>
            </div>

            <p className="text-sm text-gray-400">Lorem ipsum dolor sit.</p>

            <div className="flex gap-2">
              <Link><Images src="facebook.svg"></Images></Link>
              <Link><Images src="facebook.svg"></Images></Link>
            </div>

          </div>


          {/* post menu action  */}

          <PostMenuAction />



          {/* categories  */}

          <h1 className="mt-8 mb-4 text-sm font-medium">Categoriese</h1>
          <div className="flex flex-col gap-2 text-sm ">
            <Link className="underline">All</Link>
            <Link to=" " className="underline">
              web designe
            </Link>
            <Link to=" " className="underline">
              Development
            </Link>
            <Link to=" " className="underline">
              Database
            </Link>
            <Link to=" " className="underline">
              search Engines
            </Link>
            <Link to=" " className="underline">
              Marketing
            </Link>
          </div>

          {/* search div  */}

          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>


      </div>


      {/* comments-section  */}
      <Comments/>
    



    </div>
  );
}

export default SinglePostPage;
