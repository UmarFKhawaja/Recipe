import { createBrowserRouter } from 'react-router-dom';
import {
  ManageElement, ManagePlansElement, ManageProfileElement, ManageRecipesElement, ManageSettingsElement,
  ShowPlaceholderElement,
  SignInElement,
  SignUpElement,
  ViewRootElement
} from '../elements';

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
    path: '/manage',
    element: <ManageElement/>,
    children: [
      {
        path: 'plans',
        element: <ManagePlansElement/>
      },
      {
        path: 'recipes',
        element: <ManageRecipesElement/>
      },
      {
        path: 'profile',
        element: <ManageProfileElement/>
      },
      {
        path: 'settings',
        element: <ManageSettingsElement/>
      }
    ]
  },
  {
    path: '/browse',
    children: [
      {
        path: 'recipes',
        element: <ShowPlaceholderElement/>
      },
      {
        path: 'features',
        element: <ShowPlaceholderElement/>,
        children: [
          {
            path: 'share-progress',
            element: <ShowPlaceholderElement/>
          },
          {
            path: 'enjoy-variety',
            element: <ShowPlaceholderElement/>
          },
          {
            path: 'track-meals',
            element: <ShowPlaceholderElement/>
          },
          {
            path: 'inform-choices',
            element: <ShowPlaceholderElement/>
          },
          {
            path: 'set-goals',
            element: <ShowPlaceholderElement/>
          },
          {
            path: 'socialize-securely',
            element: <ShowPlaceholderElement/>
          }
        ]
      },
      {
        path: 'tutorials',
        element: <ShowPlaceholderElement/>
      },
      {
        path: 'techniques',
        element: <ShowPlaceholderElement/>
      }
    ]
  }
]);
