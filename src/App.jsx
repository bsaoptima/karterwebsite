import React from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact";
import SolutionPage from "./pages/Solutions";
import StudentSection from "./pages/VettingProcess";
import StudentSectionTesting from "./pages/StudentSection";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/solutions' element={<SolutionPage />} />
          <Route path='/vetting-process' element={<StudentSectionTesting />} />
          <Route path='/private-testing' element={<StudentSectionTesting />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App