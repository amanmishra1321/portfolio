import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainPage from "./pages/main-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
