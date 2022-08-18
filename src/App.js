import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import Catalog from "./components/GameCompontens/GameCatalog/Catalog";
import Create from "./components/GameCompontens/Create";
import Edit from "./components/GameCompontens/Edit";
import Details from "./components/GameCompontens/Details";

function App() {
  return (
    <div id="box">
      <AuthProvider>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<WelcomeWorld />}></Route>

            <Route path="/users/">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/games/">
              <Route path="catalog" element={<Catalog />} />
              <Route path="create" element={<Create />} />
              <Route path="edit" element={<Edit />} />
              <Route path="details/:gameId" element={<Details />} />
            </Route>
          </Routes>
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;
