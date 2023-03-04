import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackAndCards from "./Components/BackCards/BackAndCards";
import Form from "./Components/Form/Form";
import Thanks from "./Components/Thanks/Thanks";

function App() {
  return (
    <main className="row g-0">
      <BackAndCards />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
