import Mainpage from "./components/Mainpage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.less';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/my-blog" element={<Mainpage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
