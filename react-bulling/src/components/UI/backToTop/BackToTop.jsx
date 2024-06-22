import React, {useState, useEffect} from 'react';
import './backToTop.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BackToTop = () => {
    const [scroll, setScroll] =useState(0);

    useEffect(() =>{
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);

    const backToTop = () => {
        window.scrollTo(0,0);
    }
    return (
        <a 
            href="#"
            onClick={backToTop} 
            className={`back-to-top d-flex align-items-center justify-content-center ${scroll > 100 ? 'active' : ''}`}
        >
            <ArrowUpwardIcon />
        </a>
    );
};

export default BackToTop;