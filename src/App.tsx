import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePageView } from './modules/home';
import { RootLayout } from './modules/route';
import { ErrorPageView } from './modules/error';
import BlogPageView from './modules/blog';
import CalculationsPageView from './modules/calculation';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPageView />,
      children: [
        { path: '/', element: <HomePageView /> },
        { path: '/blog', element: <BlogPageView /> },
        { path: '/calculation', element: <CalculationsPageView /> },
        // { path: '/projects/:id', element: <ProjectsPageView /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}