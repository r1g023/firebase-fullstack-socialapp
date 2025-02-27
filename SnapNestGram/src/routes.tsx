import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Error from "./pages/error";
import Home from "./pages/home";
import Post from "./pages/post";
import Profile from "./pages/profile";
import MyPhotos from "./pages/myphotos";
import ProtectedRoutes from "./components/ProctedRoutes";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes auth={true} />,
    children: [
      {
        path: "/",
        element: <Home name="SnapNestGram" />,
        errorElement: <Error message="Home page not found" />
      },
      {
        path: "/post",
        element: (
          <Post
            title="Post title"
            content="Post content"
            author="Post author"
          />
        ),
        errorElement: <Error message="Post page not found" />
      },
      {
        path: "/profile",
        element: (
          <Profile
            name="John Doe"
            email="test@test.com"
            bio="I am a developer"
          />
        ),
        errorElement: <Error message="Profile page not found" />
      },
      {
        path: "/myphotos",
        element: <MyPhotos photos={[]} />,
        errorElement: <Error message="MyPhotos page not found" />
      }
    ]
  },

  // {
  //   path: "/",
  //   element: <Home name="SnapNestGram" />,
  //   errorElement: <Error message="Home page not found" />
  // },
  // {
  //   path: "/post",
  //   element: (
  //     <Post title="Post title" content="Post content" author="Post author" />
  //   ),
  //   errorElement: <Error message="Post page not found" />
  // },
  // {
  //   path: "/profile",
  //   element: (
  //     <Profile name="John Doe" email="test@test.com" bio="I am a developer" />
  //   ),
  //   errorElement: <Error message="Profile page not found" />
  // },
  // {
  //   path: "/myphotos",
  //   element: <MyPhotos photos={[]} />,
  //   errorElement: <Error message="MyPhotos page not found" />
  // },
  {
    path: "/login",
    element: <Login email="Username" password="Password" />,
    errorElement: <Error message="Login page not found " />
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error message="Signup page not found" />
  }
]);

export default router;
