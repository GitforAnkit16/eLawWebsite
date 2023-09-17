import Navbar from './Components/Navbar/Navbar';
import Home from "./Pages/home/Home";
import Footer from "./Components/Footer/Footer";
import Categories from "./Pages/categories/Categories";
import Category from "./Pages/category/Category";
import AddCategory from "./Pages/addCategory/Add";
import MyCategory from "./Pages/myCateogories/myCategories";
import Messages from "./Pages/messages/Messages";
import Msg from "./Pages/msg/Msg";
import Order from "./Pages/order/Order";
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
          path:"/requests",
          element:<Categories />
        },
        {
          path:"/category",
          element:<Category />
        },
        {
          path:"/addCategory",
          element:<AddCategory />
        },
        {
          path:"/myCategory",
          element:<MyCategory />
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
