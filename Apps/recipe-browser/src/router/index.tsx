import { createBrowserRouter } from 'react-router-dom';
import { SignInElement, SignUpElement, ViewDashboardElement, ViewRootElement } from '../elements';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ViewRootElement/>
  },
  {
    path: '/sign-in',
    element: <SignInElement/>
  },
  {
    path: '/sign-up',
    element: <SignUpElement/>
  },
  {
    path: '/view/dashboard',
    element: <ViewDashboardElement/>
  }
]);
