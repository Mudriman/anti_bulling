import React from 'react';
import './pdfviewer.scss';
import PropTypes from 'prop-types';

const PDFViewer = ({ pdfUrl }) => {
    return (
        <div className="pdf-container">
            <object
                data={pdfUrl}
                type="application/pdf"
                className="pdf-object"
            >
                <p>К сожалению, ваш браузер не поддерживает просмотр PDF файлов.</p>
            </object>
        </div>
    );
};

PDFViewer.propTypes = {
    pdfUrl: PropTypes.string.isRequired,
};
export default PDFViewer;