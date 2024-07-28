import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Questions from "./components/Questions";
import StudyMaterial from "./components/StudyMaterial";
import AddQuestion from "./components/AddQuestion";
import AddStudy from "./components/AddStudy";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/addQuestion" element={<AddQuestion />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/addStudy" element={<AddStudy />} />
        <Route path="/studyMaterial" element={<StudyMaterial />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
