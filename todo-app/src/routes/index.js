import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EntryPoint from '../pages';
import AddTodos from '../pages/addTodos';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EntryPoint />} >
          <Route path='add-todos' element={<AddTodos />} />
        </Route>
        <Route path='*' element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
