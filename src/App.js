import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepagenew from './Homepagenew';
import  {ProductContextinformations}  from './ProductContext';
import Products from './Products';
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';

function App() {
  return (
    <div className="App">

    <ProductContextinformations>
    <Router>
      <Routes>
        <Route path="/" element={<Homepagenew/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/createproducts" element={<CreateProduct/>}/>
        <Route path="/editproducts/:id" element={<EditProduct/>}/>
      </Routes>
    </Router>
</ProductContextinformations>
    </div>
  );
}

export default App;
