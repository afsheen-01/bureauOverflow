import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Routes>
        <Route path="/token" element={<Login />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
