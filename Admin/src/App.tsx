import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/DashBoard";
import Sidebar from "./pages/Sidebar";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SignUp />
      <SignIn />
      <Dashboard />
      <Sidebar />
      <Footer />
     
    </div>
  );
}

export default App;
