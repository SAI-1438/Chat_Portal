import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Loginpage from './Pages/Loginpage/Loginpage';
import SignUp from './Pages/SignUp/SignUp';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/login' element={<Loginpage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
