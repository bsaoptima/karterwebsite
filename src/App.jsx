import React from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact";
import SolutionPage from "./pages/Solutions";
import StudentSection from "./pages/StudentSection";
import ApplicationForm from "./pages/ApplicationForm";
import Testing from "./pages/Testing"
import LeadGenForm from "./components/LeadGenForm";
import ProjectsPage from "./pages/Projects";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/solutions' element={<SolutionPage />} />
          <Route path='/vetting-process' element={<StudentSection />} />
          <Route path='/private-testing' element={<Testing />} />
          <Route path='/build' element={<LeadGenForm />} />
          <Route path='/projects' element={<ProjectsPage />} /> 
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App