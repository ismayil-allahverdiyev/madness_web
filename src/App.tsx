import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePageView } from './modules/home';
import { RootLayout } from './modules/route';
import { ErrorPageView } from './modules/error';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPageView />,
      children: [
        { path: '/', element: <HomePageView /> },
        // { path: '/projects', element: <ProjectsPageView /> },
        // { path: '/projects/:id', element: <ProjectsPageView /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}