import './App.css';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Chatcontainer from './components/Chatcontainer';
function App() {
  return (
   <BrowserRouter>
   
      
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/chatcontainer" element={<Chatcontainer/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </BrowserRouter>
     
       
      
  );
}

export default App;
