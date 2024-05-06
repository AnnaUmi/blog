import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import React from 'react';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <MantineProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
}

export default App;
