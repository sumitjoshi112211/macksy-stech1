import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import RevolutionSection from "./components/RevolutionSection";
import ProgramsSection from "./components/sections/ProgramsSection";
import DeterminationSection from "./components/DeterminationSection";
import StatsJourney from "./components/StatsJourney";
import TestimonialSlider from "./components/ TestimonialSlider";
import RecognitionFooter from "./components/RecognitionFooter";
import Contact from "./pages     /Contact.jsx";
import DigitalMarketingDetail from "./pages/programs/DigitalMarketingDetail";
import DataScienceDetail from "./pages/programs/DataScienceDetail";
import MachineLearningDetail from "./pages/programs/MachineLearningDetail";
import FinanceDetail from "./pages/programs/FinanceDetail";
import Programs from "./pages/programs/Programs";
import WebDevelopmentDetail from "./pages/programs/WebDevelopmentDetail";
import CloudComputingDetail from "./pages/programs/CloudComputingDetail";
import ArtificialIntelligenceDetail from "./pages/programs/ArtificialIntelligenceDetail";
import WebDevelopment from "./pages/programs/WebDevelopment";
import CloudComputing from "./pages/programs/CloudComputing";
import AI from "./pages/programs/AI";
import AutoCADDetail from "./pages/programs/AutoCADDetail";
import HumanResourceDetail from "./pages/programs/HumanResourceDetail";
import StockMarketDetail from "./pages/programs/StockMarketDetail";
import CyberSecurityDetail from "./pages/programs/CyberSecurityDetail";
import AWSCloudDetail from "./pages/programs/AWSCloudDetail";
import NanobiotechDetail from "./pages/programs/NanobiotechDetail";
import UIUXDetail from "./pages/programs/UIUXDetail";


export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>
            <ErrorBoundary>
              <VideoSection />
            </ErrorBoundary>
            <ErrorBoundary>
              <RevolutionSection />
            </ErrorBoundary>
            <ErrorBoundary>
              <ProgramsSection />
            </ErrorBoundary>
            <ErrorBoundary>
              <DeterminationSection />
            </ErrorBoundary>
            <ErrorBoundary>
              <StatsJourney/>
            </ErrorBoundary>
            <ErrorBoundary>
              <TestimonialSlider/>
            </ErrorBoundary>
            <ErrorBoundary>
              <RecognitionFooter/>
            </ErrorBoundary>
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/digitalmarketing" element={<DigitalMarketingDetail />} />
        <Route path="/programs/datascience" element={<DataScienceDetail />} />
        <Route path="/programs/machinelearning" element={<MachineLearningDetail />} />
        <Route path="/programs/finance" element={<FinanceDetail />} />
        <Route path="/programs/webdevelopment" element={<WebDevelopmentDetail />} />
        <Route path="/programs/cloudcomputing" element={<CloudComputingDetail />} />
        <Route path="/programs/artificialintelligence" element={<ArtificialIntelligenceDetail />} />
        <Route path="/programs/web-development" element={<WebDevelopment />} />
        <Route path="/programs/cloud-computing" element={<CloudComputing />} />
        <Route path="/programs/ai" element={<AI />} />
        <Route path="/programs/autocad" element={<AutoCADDetail />} />
        <Route path="/programs/humanresource" element={<HumanResourceDetail />} />
        <Route path="/programs/stockmarket" element={<StockMarketDetail />} />
        <Route path="/programs/cybersecurity" element={<CyberSecurityDetail />} />
        <Route path="/programs/awscloud" element={<AWSCloudDetail />} />
        <Route path="/programs/nanobiotech" element={<NanobiotechDetail />} />
        <Route path="/programs/uiux" element={<UIUXDetail />} />
        
       </Routes>
    </>
  );
}
