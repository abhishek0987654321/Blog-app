import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
// import './style.scss';
import "./style.scss";

const Layout = () => {
  return (
    <>  
    <Navbar />
    <div className="mainContainer"><Outlet /></div>

    <Footer />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        
        path: "/",
        element: <Home />,
      },
      {
        // path: "/post/:id",
        path: "/single",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;