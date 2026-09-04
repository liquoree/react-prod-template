import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@/modules/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);
