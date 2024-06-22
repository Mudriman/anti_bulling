import React from 'react';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import pdfFile from '../../assets/dlya_detey.pdf';

const Children = () => {
    return (
        <div>
            <br />
            <h1>Что делать, если вы ребенок</h1><br />
            <PDFViewer pdfUrl={pdfFile} />
        </div>
    );
};

export default Children;