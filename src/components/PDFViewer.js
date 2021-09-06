import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
// import { Document } from 'react-pdf/dist/esm/entry.webpack';
import "./PDFViewer.css";


export default function PDFViewer({ currentCourse }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoomLevel, setZoom] = useState(1.5);
  const [Angle, setAngle] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log("success")
  }

  function goToFirst() {
    setPageNumber(1);
  }

  function goPrev() {
    setPageNumber(pageNumber -1);
  }

  function ZoomIn({ }) {
    setZoom(zoomLevel + 0.2);
  }

  function rotatePage({ }) {
    setAngle(Angle + 90);
  }

  function ZoomOut({ }) {
    setZoom(zoomLevel - 0.2);
  }

  function goNext() {
    setPageNumber(pageNumber + 1);
  }

  function goLast() {
    setPageNumber(numPages);
  }

  return (
    <div className="pdfDisplay">
      <div className="navigation">
        <h2 className="HeaderForControls">PDFs and Controls</h2>
        <button className="controlButton" id="first" onClick={goToFirst}>First</button>
        <button className="controlButton" id="prev" onClick={goPrev}>Previous</button>
        <button className="controlButton" id="ZoomOut" onClick={ZoomOut}>Zoom Out</button>
        <button className="controlButton" id="Rotate" onClick={rotatePage}>Rotate</button>
        <button className="controlButton" id="ZoomIn" onClick={ZoomIn}>Zoom In</button>
        <button className="controlButton" id="next" onClick={goNext}>Next</button>
        <button className="controlButton" id="last" onClick={goLast}>Last</button>
      </div>
      <Document
        file={currentCourse}
        onLoadSuccess={onDocumentLoadSuccess}
        noData={"Select a PDF"}
        onLoadError={console.error}
      >
        <Page pageNumber={pageNumber}
          width={500}
          scale={zoomLevel}
          rotate = {Angle}
        />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}