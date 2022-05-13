import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import ViewProducts from "./components/ViewProducts";
import NavBar from "./components/NavBar";
import AddProduct from "./components/AddProduct"
import UpdateProduct from "./components/UpdateProduct"

// Para hindi paulit-ulit
axios.defaults.baseURL = "http://localhost:8000/api"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/products' element={<ViewProducts/>}></Route>
          <Route path='/addproduct' element={<AddProduct/>}></Route>
          <Route path='/updateproduct/:id' element={<UpdateProduct/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
