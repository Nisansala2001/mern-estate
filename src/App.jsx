// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";

import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut"; // Correctly fixed typo

import About from "./pages/About";
import Profile from "./pages/Profile";


import Header from "./components/Header"; // Correctly fixed typo

const App = () => {
    
    return (
        <BrowserRouter>
            <Header /> {/* Use the Header component here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-out" element={<SignOut />} /> {/* Correctly fixed typo */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App; // Correctly exporting the App component
