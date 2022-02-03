import './App.css';
import AddNotes from './pages/AddNotes';
import Navigation from './components/navigation';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<AddNotes />} />
        <Route path="/add_notes" element={<AddNotes />} />

      </Routes>
    </div>
  );
}

export default App;
