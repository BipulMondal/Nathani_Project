import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import AppRoutes from "./routes/AppRoutes";
import { GlobalProvider } from "./GlobalContext/GlobalContext";

function App() {
  return (
    <div className="">
      <GlobalProvider>
        <ToastContainer />
        <Router>
          <AppRoutes />
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
