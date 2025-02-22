
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import Home from './pages/Home';
import Cart from './component/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
);

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
