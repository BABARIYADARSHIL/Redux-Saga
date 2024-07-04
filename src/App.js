import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { Provider } from 'react-redux';
// import Layout from './api/layout/Layout'
import PrivateRoute from './Routing/PriveteRoute'
import PubliceRoute from './Routing/PubliceRoute'
import store from './store';


const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PubliceRoute />}>
              <Route index element={<Login />} />
            </Route>
            <Route path='/Home' element={<PrivateRoute />}>
              <Route index element={<Home />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
