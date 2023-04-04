import React from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Home, Product, ProductDetails, Search } from './pages';
import { Header, Footer } from './components';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      { path: '/', element: <Home/>},
      { path: '/products/:id', element: <Product/>},
      { path: '/product/:id', element: <ProductDetails/>},
      { path: '/search', element: <Search/>}
    ]
  }
])

const App = () => {
  return <div>
    <RouterProvider router={router}/>
  </div>;
};

export default App;
