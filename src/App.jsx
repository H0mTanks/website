import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { GlobalContext } from "./GlobalContext.jsx";
import { useContext } from "react";
import { Register } from "./Register";
import { Todo } from "./Todo";

export function App() {
  const { isLogin } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={isLogin ? <Todo /> : <Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
