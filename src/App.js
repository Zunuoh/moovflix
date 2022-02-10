import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/main/HomeScreen';
import ManageProfile from './screens/profile/ManageProfile';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import HeaderScreen from './screens/HeaderScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/profile" element={<ManageProfile/>}/>
      </Routes>
    
    </BrowserRouter>
   
 
  );

}

export default App;
