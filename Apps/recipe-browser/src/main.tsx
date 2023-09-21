import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { MantineProvider } from '@mantine/core';
import { Notifications as NotificationsProvider } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { COOKIES_PROVIDER_DEFAULT_SET_OPTIONS } from './constants';
import { SessionProvider } from './providers';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={COOKIES_PROVIDER_DEFAULT_SET_OPTIONS}>
      <SessionProvider>
        <MantineProvider>
          <NotificationsProvider/>
          <RouterProvider router={router}/>
        </MantineProvider>
      </SessionProvider>
    </CookiesProvider>
  </React.StrictMode>
);
