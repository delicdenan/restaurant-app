import "./App.css";
import { LandingPage } from "./LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import { Search } from "./Search/Search";

function App() {
  return (
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
