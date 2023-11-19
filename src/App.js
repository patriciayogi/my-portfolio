import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import NoPage from "./components/NoPage";
import Skills from "./components/Skills";
import SecretSantaApp from "./components/projects/SecretSantaApp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Main />} />
          {/* */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/my-portfolio" element={<Main />} />
          <Route path="/secretsanta" element={<SecretSantaApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
