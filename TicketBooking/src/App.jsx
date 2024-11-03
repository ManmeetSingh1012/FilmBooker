import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Landing = lazy(() => import("./Pages/Landing/Landing"));

function App() {
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
