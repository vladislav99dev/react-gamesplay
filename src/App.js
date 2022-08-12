import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import Catalog from "./components/GameCompontens/Catalog";
import Create from "./components/GameCompontens/Create";
import Edit from "./components/GameCompontens/Edit";
import Details from "./components/GameCompontens/Details";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<WelcomeWorld />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/details" element={<Details />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
