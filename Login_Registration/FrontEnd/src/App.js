import {Route,Routes} from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration'
import Dashboard from './Components/Dashboard';
// import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element={<Login/>}/>
      <Route path = '/register' element={<Registration/>}/>
      <Route path = '/dashboard' element={<Dashboard/>}/>

    </Routes>
    </>
  );
}

export default App;
