import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import AddProducts from './AddProducts';
import UpdateProducts from './UpdateProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from './Protected';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}
        
        <h1>E-Commerce Dashoard</h1>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />

            <Route exact path='/add' element={<Protected/>}>
              <Route exact path='/add' element={<AddProducts/>}/>
            </Route>

            <Route exact path='/update' element={<Protected/>}>
              <Route exact path='/update' element={<UpdateProducts/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
