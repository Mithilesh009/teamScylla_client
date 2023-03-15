import './App.css';
import Home from './pages/Home';
import Event from './pages/Event';
import Sponsors from './pages/Sponsors';
import Gallery from './pages/Gallery';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Department from './pages/Department';


function App() {


  return (
    <>
  <Router>
    <Routes>
      <Route path="/" element={<Home /> }/>
      <Route path="/event" element={<Event /> }/>
      <Route path="/sponsors" element={<Sponsors /> }/>
      <Route path="/gallery"  element={<Gallery /> }/>
      <Route path="/department" element={<Department /> }/>
    </Routes>
  </Router>
  
    </>
  );
}

export default App;
