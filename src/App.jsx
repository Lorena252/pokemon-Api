import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContainCardsPokemon from "./components/ContainCardsPokemon";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<ContainCardsPokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
