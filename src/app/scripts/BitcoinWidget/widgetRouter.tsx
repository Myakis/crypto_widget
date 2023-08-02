import { createBrowserRouter } from 'react-router-dom'
import { CryptoBlock } from '@/widgets/CryptoBlock'

export const widgetRouter = () =>
  createBrowserRouter([
    {
      children: [
        {
          path: '/*',
          element: <CryptoBlock />,
        },
      ],
    },
  ])
