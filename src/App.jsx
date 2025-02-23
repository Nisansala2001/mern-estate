// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SingOut from "./pages/SingOut";
import About from "./pages/About";
import Profile from "./pages/Profile";
export const App = () => {
    return <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sing-out" element={<SingOut />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

    </Routes>
    
    </BrowserRouter>;
}

export default App; // This line is crucial for default export
