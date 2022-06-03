import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./page/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
