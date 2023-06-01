import Header from './components/Header';
import Navbar from './components/Navbar';

import { createBrowserRouter,Outlet,RouterProvider,ScrollRestoration} from 'react-router-dom';
import FoodPage from './pages/FoodPage';
import { productsData } from './api/Api';
import Product from './pages/Product';
import Footer from './components/Footer';

const Layout = () => {
  return(
    <div>
      <Header/>
      <Navbar/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<FoodPage/>,
        loader : productsData
      },
      {
        path:"/p/:id",
        element : <Product/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
