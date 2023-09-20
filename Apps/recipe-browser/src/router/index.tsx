import { createBrowserRouter } from 'react-router-dom';
import { RootElement, SignInElement, SignUpElement } from '../elements';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement/>
  },
  {
    path: '/sign-in',
    element: <SignInElement/>
  },
  {
    path: '/sign-up',
    element: <SignUpElement/>
  }
]);
