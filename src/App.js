import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./page/Layout";
import LoginForm from "./page/LoginForm";
import MyPage from "./page/MyPage";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/loginform" element={<LoginForm />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
