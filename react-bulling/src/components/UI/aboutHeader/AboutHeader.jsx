import React from 'react';
import './aboutheader.scss';

const AboutHeader = () => {
    return (
        <section className='aboutHeader'>
            <div className="header">
                <span>Скажи</span><br />
                <span>Буллингу</span><br />
                <span>Нет!</span>
            </div>
            <div className="header-low">
                вместе мы сможем победить травлю
            </div>
        </section>
    );
};

export default AboutHeader;