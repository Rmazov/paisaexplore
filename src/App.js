import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import BlogForm from './components/BlogForm';


function App() {
    return (
        <Router>
         <Header /> {Header}
            <Routes>
                <Route path="/blog" element={<BlogForm />} />
            </Routes>
        </Router>
    );
}

export default App;
