
import './App.css';
import { Routes, Route } from "react-router-dom";
import {HomePage, ResultsPage} from "./pages"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
