import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
// import { Document } from 'react-pdf/dist/esm/entry.webpack';
import "./PDFViewer.css";


export default function PDFViewer({ currentCourse }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [zoomLevel, setZoom] = useState(1.5);
  const [Angle, setAngle] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    setPageNumber(1);
    setNumPages(numPages);
  }

  function goToFirst() {
    setPageNumber(1);
  }

  function goPrev() {
    setPageNumber(pageNumber - 1);
  }

  function ZoomIn({ }) {
    setZoom(zoomLevel + 0.2);
  }

  function rotateClockPage({ }) {
    setAngle(Angle + 90);
  }

  function rotateCounterClockPage({ }) {
    setAngle(Angle - 90);
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
      <p>Page {pageNumber} of {numPages}</p>
      <div className="navigation">
        <button className="controlButton" id="lb" onClick={goPrev}>{"<"}</button>
        <button className="controlButton" id="rb" onClick={goNext}>{">"}</button>
        <button className="controlButton" id="lb" onClick={goToFirst}>{"<<"}</button>
        <button className="controlButton" id="rb" onClick={goLast}>{">>"}</button>
        <button className="controlButton" id="lb" onClick={ZoomIn}>{"+"}</button>
        <button className="controlButton" id="rb" onClick={ZoomOut}>{"-"}</button>
        <button className="controlButton" id="lb" onClick={rotateClockPage}>{"+90 \u00B0"}</button>
        <button className="controlButton" id="rb" onClick={rotateCounterClockPage}>{"-90 \u00B0"}</button>
      </div>
      <div className="pdfs">
        <Document
          file={currentCourse}
          onLoadSuccess={onDocumentLoadSuccess}
          noData={"Select a PDF"}
          onLoadError={console.error}
        >
          <Page pageNumber={pageNumber}
            width={500}
            scale={zoomLevel}
            rotate={Angle}
          />
        </Document>

      </div>
    </div>
  );
}