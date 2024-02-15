import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContainCardsPokemon from "./components/ContainCardsPokemon";
import Detail from "./components/Detail"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<ContainCardsPokemon />} />
        <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
