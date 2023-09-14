import './App.css';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import {HashRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
          <Route path='/' element={<Header />}></Route>
          <Route path='cart' element={<Header />}></Route>
          {/* <Route path='/psgr/*' element={<Header-sub />}></Route> */}
        </Routes>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='cart' element={<Cart />}></Route>
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
