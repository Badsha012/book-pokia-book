import React, { Component } from 'react';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
//import Header from '../Components/Header/Header';
import Root from '../Pages/Root/Root';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPages></ErrorPages>,
    children:[{
      index:true,
      loader:()=>fetch('bookData.json'),
      path:"/",
      Component:Home,
    }]
  },
]);