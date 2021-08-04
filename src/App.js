import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import PDFViewer from './components/PDFViewer.js'
function App() {
  const [currentCourse, setCurrentCourse] = useState("")
  return (
    <>
      <Navbar setCurrentCourse={setCurrentCourse}/>
      <PDFViewer currentCourse={currentCourse}/>
    </>
  );
}

export default App;