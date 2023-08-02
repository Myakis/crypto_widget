import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '@/pages/main'
import { baseLayout } from './layouts/baseLayout'
import { layoutWithWidget } from './layouts/layoutWithWidget'

export const appRouter = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>Ошибка</div>,
      children: [
        {
          path: '/withoutWidget',
          element: (
            <>
              <h1>Тут могла быть ваша реклама))</h1>
            </>
          ),
        },
      ],
    },
    {
      element: layoutWithWidget,
      errorElement: <div>Ошибка</div>,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
      ],
    },
  ])
