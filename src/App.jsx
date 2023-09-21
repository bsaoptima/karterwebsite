import React from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact";
import StudentSection from "./pages/StudentSection";
import ApplicationForm from "./pages/ApplicationForm";
import Testing from "./pages/Testing"
import LeadGenForm from "./components/LeadGenForm";
import ProjectsPage from "./pages/Projects";
import SolutionPage from "./pages/Solutions";
import ServicesPage from "./pages/Services";
import AddStack from "./pages/Stack/AddStack";
import RateStacks from "./pages/Stack/RateStacks";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/solutions' element={<SolutionPage />} />
          <Route path='/vetting-process' element={<StudentSection />} />
          <Route path='/private-testing' element={<Testing />} />
          <Route path='/build' element={<LeadGenForm />} />
          <Route path='/projects' element={<ProjectsPage />} /> 
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/stacks/add' element={<AddStack />} />
          <Route path='/stacks/rate' element={<RateStacks />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App