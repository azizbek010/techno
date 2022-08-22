import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import NewGame from "./pages/Add new game";
import AboutGame from "./pages/Game";
import GameUpdate from "./pages/Game update";
import GameProvider from "./utilities/gameContext";
import Cart from "./pages/Cart/index";
import AuthProvider from "./utilities/authContext";
import LoginRoute from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/" element={<AboutPage />} />
            <Route path="/newgame" element={<NewGame />} />
            <Route path="/game/:gameId" element={<AboutGame />} />
            <Route path="/game/update/:gameId" element={<GameUpdate />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginRoute />} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </AuthProvider>
  );
}

export default App;
