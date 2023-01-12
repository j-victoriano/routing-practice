import Home from "./components/Home";
import Word from "./components/Word";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='home' element={<Home/>}></Route>
      <Route path=':word' element={<Word/>}></Route>
      <Route path=':word/:color/:backgroundColor' element={<Word/>}></Route>
    </Routes>
  );
}

export default App;
