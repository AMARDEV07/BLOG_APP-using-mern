import React from "react";
import Images from "./Images";
import { Link } from "react-router-dom";

function PostListItems() {
  return (
    <div className="flex flex-col xl:flex-row gap-8 ">
      {/* images  */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Images src="featured2.jpeg" className="rounded-2xl object-cover" w="735" />
      </div>

      {/* details  */}


      <div className="flex flex-col gap-4 xl-w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ab?
        </Link>

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written By</span>
          <Link to="/test" className="text-blue-800">
            Aman panwar
          </Link>
          <span>on</span>
          <Link to="/test" className="text-blue-800">
            web Design
          </Link>
        </div>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem reprehenderit corrupti voluptas perspiciatis hic ex? Aliquam tempore asperiores iste!</p>
        <Link to='/singlePost' className=" underline text-blue-900 text-sm">Read More</Link>

      </div>
    </div>
  );
}

export default PostListItems;
