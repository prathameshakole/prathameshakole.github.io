import './index.scss'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resumePDF from '../../assets/resume/may_2024.pdf';
import Loader from 'react-loaders';
import Footer from '../Footer'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <>
            <div className='text-zone2'>
                <div className='download-button'>
                    <a href={resumePDF} download>
                        <button className='flat-button'>Download Resume</button>
                    </a>
                </div>
                <div className='display'>
                    <Document
                        file={resumePDF}
                        onLoadSuccess={onDocumentLoadSuccess}
                        renderMode="canvas" >
                        <Page pageNumber={pageNumber} renderTextLayer={false} />
                    </Document>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </div>
            </div>
            <Loader type='pacman' />
            <Footer/>
        </>

    );
}

export default Resume;