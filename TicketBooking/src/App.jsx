import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useProfile from "./store/usProfile";

const Landing = lazy(() => import("./Pages/Landing/Landing"));

function App() {
  const reset = useProfile((state) => state.reset);

  useEffect(() => { 
    reset();
  },[reset])
  
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
