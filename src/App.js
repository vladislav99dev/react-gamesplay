import React from "react";
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { ValidationProvider } from "./context/ValidationsContext";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import Catalog from "./components/GameCompontens/GameCatalog/Catalog";
import Create from "./components/GameCompontens/Create";
import Edit from "./components/GameCompontens/Edit";
import Details from "./components/GameCompontens/Details";
import Logout from "./components/Logout";
import Delete from "./components/GameCompontens/Delete";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div id="box">
      {/* <React.StrictMode> */}
      <ValidationProvider>
        <AuthProvider>
          <Header />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<WelcomeWorld />}></Route>

              <Route path="/users/">
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="logout" element={<Logout />} />
              </Route>
              <Route path="/games/">
                <Route path="catalog" element={<Catalog />} />
                <Route path="create" element={<Create />} />
                <Route path="edit/:gameId" element={<Edit />} />
                <Route path="details/:gameId" element={<Details />} />
                <Route path="delete/:gameId" element={<Delete />} />
              </Route>
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </main>
        </AuthProvider>
      </ValidationProvider>
      {/* </React.StrictMode> */}
    </div>
  );
}

export default App;
