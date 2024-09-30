import { Suspense, lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PrivateRoute from "./utility/PrivateRoute.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const Landing = lazy(() => import("./Pages/Landing.jsx"));
  const Login = lazy(() => import("./Pages/Login.jsx"));
  const Dashboard = lazy(() => import("./Pages/Dashboard.jsx"));
  const Verify = lazy(() => import("./Pages/Verify.jsx"));
  const Signup = lazy(() => import("./Pages/Signup.jsx"));
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
