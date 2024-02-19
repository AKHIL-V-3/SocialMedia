
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AuthLayout from "./Layouts/Auth"
import { ModalsProvider } from '@mantine/modals';
import SignUpPage from "./pages/Auth/SignUp/index"
import { MantineProvider } from "@mantine/core";
import SignUpPage2 from "./pages/Auth/SignUp2";
import SignUpPage3 from "./pages/Auth/Signup3";
import SignInPage from "./pages/Auth/SignIn";
import HomePage from "./pages/Home";

// import './App.css'

const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />
  },

  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [

      {
        path: "signup",
        element: <SignUpPage />,

      },

      {
        path: "signup/step2",
        element: <SignUpPage2 />
      },

      {
        path: "signup/step3",
        element: <SignUpPage3 />
      },

    ]
  },

  {
    path: "/auth/signin",
    element: <SignInPage />
  },

])

function App() {

  return (
    <>
      <MantineProvider>
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </>

  )
}

export default App
