import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../components/Register/Register';
import Login from '../components/Login/LOgin';
import PrivateRoutes from './PrivateRoutes';
import AddJob from '../components/AddJob/AddJob';
import AllJobs from '../components/AllJobs/AllJobs';
import MyAddedJobs from '../components/MyAddedJobs/MyAddedJobs';
import JobDetails from '../components/AllJobs/JobDetails';
import MyAcceptedJobs from '../components/MyAcceptedJobs/MyAcceptedJobs';
import Error from '../components/Error/Error';
import AboutPage from '../components/About/Page/AboutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/allJobs',
        Component: AllJobs,
      },
      {
        path: '/about',
        Component: AboutPage,
      },
      {
        path: '/addJob',
        element: (
          <PrivateRoutes>
            <AddJob></AddJob>
          </PrivateRoutes>
        ),
      },
      {
        path: '/myAddedJobs',
        element: (
          <PrivateRoutes>
            <MyAddedJobs></MyAddedJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: '/allJobs/:id',
        element: <JobDetails></JobDetails>,
      },
      {
        path: '/myAcceptedJobs',
        element: (
          <PrivateRoutes>
            <MyAcceptedJobs></MyAcceptedJobs>
          </PrivateRoutes>
        ),
      },
    ],
  },
  // {
  //   path: "*",
  //   Component: Error,
  // },
]);
