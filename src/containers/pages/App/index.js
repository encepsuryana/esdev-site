import { Link, Route, Routes } from "react-router-dom";
import logo from "../../../assets/img/logo/logo.svg";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Register from "../Register";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "../../../config/redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
