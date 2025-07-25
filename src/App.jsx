import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DefaultLayout from './layouts/DefaultLayout';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import GetSingleProductsPage from './pages/GetSingleProductImage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/About" Component={AboutPage} />
          <Route path="/Products" Component={ProductsPage} />
          <Route path="/Products/:id" Component={GetSingleProductsPage} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}