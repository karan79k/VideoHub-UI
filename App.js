import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Videos from './component/Videos';
import UploadVideo from './component/UploadVideo';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {
  return (
    <>
      <Router> 
         <Header/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/upload' element={<UploadVideo/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>

        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
