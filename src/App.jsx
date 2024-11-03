import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Bookings from "./pages/Bookings.jsx";
import Account from "./pages/Account.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to={"dashboard"} />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="Account" element={<Account />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}
