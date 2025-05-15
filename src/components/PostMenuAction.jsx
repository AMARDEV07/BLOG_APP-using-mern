import React from "react";

function PostMenuAction() {
  return (
    <div className="">
      <h1 className="mt-8 mb-4 text-sm font-medium">Action</h1>

      {/* svg save post  */}
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 3.75H6.75A2.25 2.25 0 004.5 6v14.25l7.5-4.5 7.5 4.5V6a2.25 2.25 0 00-2.25-2.25z"
          />
        </svg>
        <span>Save this Post</span>
      </div>

      {/* delete post svg  */}
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 18M9 18V9M15 18V9M4.5 6.75H19.5M10.5 6.75V5.25C10.5 4.83579 10.8358 4.5 11.25 4.5H12.75C13.1642 4.5 13.5 4.83579 13.5 5.25V6.75M4.5 6.75H19.5L18.75 19.5H5.25L4.5 6.75Z"
          />
        </svg>

        <span>Delete Post</span>
      </div>
    </div>
  );
}

export default PostMenuAction;
