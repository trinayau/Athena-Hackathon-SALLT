
import './App.css';
import { Routes, Route } from "react-router-dom";
import {HomePage, ResultsPage} from "./pages";
import {default as Page} from "./layouts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
