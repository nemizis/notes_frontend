import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Heaeder';
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
        <div className="container dark">
          <div className="app">
          <Header />
            <Routes>
              <Route path="/" exact element={<NotesListPage/>} />
              <Route path="/note/:noteId" element={<NotePage/>} /> 
            </Routes> 
          </div>
        </div>
    </Router>
  );
}

export default App;
