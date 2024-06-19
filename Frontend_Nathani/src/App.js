import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from './routes/AppRoutes';
import Axios from "axios"

function App() {
  return (
    <div className="">
      <ToastContainer />
      <Router> 
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
