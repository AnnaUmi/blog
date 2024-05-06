import './App.css';
import Home from "./pages/Home";
import {QueryClient} from "@tanstack/react-query";
import {QueryClientProvider} from "@tanstack/react-query";
import { MantineProvider } from '@mantine/core'
function App() {
    const queryClient = new QueryClient()
  return (
    <MantineProvider>
        <QueryClientProvider client={queryClient}>
      <Home/>
        </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
