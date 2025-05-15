import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import PostListPage from "./Routes/PostListPage";
import SinglePostPage from "./Routes/SinglePostPage";
import MainLayout from "./Layouts/MainLayout";
import WritePage from "./Routes/WritePage";
import LoginPage from "./Routes/LoginPage";
import RegisterPage from "./Routes/RegisterPage";
import { ClerkProvider } from "@clerk/clerk-react";



// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/singlePost",
        element: <SinglePostPage />,
      },
     
      {
        path: "/write",
        element: <WritePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      // Keep this as a fallback for any other slugs
      {
        path: "/:slug",
        element: <HomePage />,
      },
     
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
