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
import Register from "./Pages/register/Register";
import Arbitrators from './Pages/arbitrators/Arbitrators';
import Docwriters from './Pages/docwriters/Docwriters';
import Trademark from './Pages/trademark/Trademark';
import Lawyers from "./Pages/lawyers/Lawyers";
import License from "./Pages/license/license";
import Tax from "./Pages/tax/Tax";
import Mediators from "./Pages/mediators/mediators"
import Notaries from './Pages/notaries/notaries';
import Company from './Pages/company/Company';
import Appointment from './Pages/appointment/Appointment';
import Profile from "./Pages/profile/Profile";

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
        },
        {
          path:"/register",
          element:<Register />
        },
        {
          path:"/lawyers",
          element:<Lawyers />
        },
        {
          path:"/arbitrators",
          element:<Arbitrators />
        },
        {
          path:"/mediators",
          element:<Mediators />
        },
        {
          path:"/notaries",
          element:<Notaries />
        },
        {
          path:"/docwriters",
          element:<Docwriters />
        },
        {
          path:"/company",
          element:<Company />
        },
        {
          path:"/tax",
          element:<Tax />
        },
        {
          path:"/trademark",
          element:<Trademark />
        },
        {
          path:"/license",
          element:<License />
        },
        {
          path:"/appointment",
          element:<Appointment />
        },
        {
          path:"/messages",
          element:<Messages />
        },
        {
          path:"/profile",
          element:<Profile />
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
