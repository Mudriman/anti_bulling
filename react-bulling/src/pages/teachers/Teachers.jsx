import React from 'react';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import pdfFile from '../../assets/dlya_uchiteley.pdf';

const Teachers = () => {
    return (
        <div>
            <br />
            <h1>Что делать, если вы учитель</h1><br />
            <PDFViewer pdfUrl={pdfFile} />
        </div>
    );
};

export default Teachers;