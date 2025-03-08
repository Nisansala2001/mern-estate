// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"; 
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header"; 

const App = () => {
    return (
        <BrowserRouter>
            <Header /> {/* Use the Header component here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} /> {/* Correctly fixed typo */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App; // Correctly exporting the App component
