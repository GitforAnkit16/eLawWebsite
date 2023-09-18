import Navbar from './Components/Navbar/Navbar';
import Home from "./Pages/home/Home";
import Footer from "./Components/Footer/Footer";
import Messages from "./Pages/messages/Messages";
import Msg from "./Pages/msg/Msg";
import Order from "./Pages/order/Order";
import Login from "./Pages/login/Login";
import Services from './Pages/services/Services';
import Documentation from "./Pages/documentation/Documentation";
import Ask from "./Pages/ask/Ask";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/messages",
          element:<Messages />
        },
        {
          path:"/msg",
          element:<Msg />
        },
        {
          path:"/order",
          element:<Order />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/services",
          element:<Services />
        },
        {
          path:"/documentation",
          element:<Documentation />
        },
        {
          path:"/ask",
          element:<Ask />
        }
      ]
    },
  ]);
  return (
    <div className="App">
     <RouterProvider router={router} />  
    </div>
  );
}

export default App;
