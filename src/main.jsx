import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './index.css'
import {router} from './routes/mainRouter'
import { CssBaseline } from '@mui/material'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline/>
    <RouterProvider router={router} />
  </StrictMode>,
)

