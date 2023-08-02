import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/shared/base.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { appStore } from '../../appStore'
import { widgetRouter } from './widgetRouter'

const widget = document.getElementById('cryptoWidget') as HTMLElement

ReactDOM.createRoot(widget).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={widgetRouter()} />
    </Provider>
  </React.StrictMode>
)
