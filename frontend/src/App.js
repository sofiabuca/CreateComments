import AppCss from "./App.css";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/createpost">Create A Post</Link>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/createpost" exact Component={Home}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
