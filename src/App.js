import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";
import AddManager from "./pages/Managers/AddManager";
import UpdateManager from "./pages/Managers/UpdateManager";
import Managers from "./pages/Managers/Managers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/managers/add" element={<AddManager />} />
          <Route path="/managers/update" element={<UpdateManager />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
