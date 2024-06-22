import React from 'react';
import './aboutheader.scss';

const AboutHeader = () => {
    return (
        <section className='aboutHeader'>
            <div className="header">
                <span>скажи</span><br />
                <span>нет</span><br />
                <span>буллингу!</span>
            </div>
            <div className="header-low">
                вместе мы сможем победить травлю
            </div>
        </section>
    );
};

export default AboutHeader;