import logo from './logo.svg';
import './App.css';
import Heder from './component/Heder/Heder';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import OrderReview from './component/OrderReview/OrderReview';
import Grandpa from './component/GrandPa/Grandpa';

function App() {
  return (
    <div className="App">
     <Heder></Heder>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
       <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
     </Routes>
    </div>
  );
}

export default App;
