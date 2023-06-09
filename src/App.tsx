import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UsersReview from "./pages/UsersReview";
import NotFound from "./pages/NotFound";
import Welcome from "pages/Welcome";
import { AppLayout } from "pages/AppLayout";
import Login from "pages/Login";
import UserProfile from "pages/UsersReview/views/UserProfile";
import Products from "pages/Products";
import { ReactQueryProvider } from "utils/reactQuery/ReactQueryProvider";
import Employees from "./pages/Employees";
import EmployeesWithApollo from "./pages/EmployeesWithApollo";

function App() {
  return (
    <ReactQueryProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Welcome />} />
          <Route path="/users">
            <Route index element={<UsersReview />} />
            <Route path=":id" element={<UserProfile />} />
          </Route>
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees-apollo" element={<EmployeesWithApollo />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ReactQueryProvider>
  );
}

export default App;
