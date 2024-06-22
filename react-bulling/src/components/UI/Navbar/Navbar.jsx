import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleItemClick = (index, path) => {
        setActiveItem(index);
        navigate(path);
        setMenuOpen(false); // Закрываем бургер-меню после выбора пункта
    };

    const menuItems = [
        { text: 'О нас', path: '/' },
        { text: 'Родителям', path: '/parents' },
        { text: 'Учителям', path: '/teachers' },
        { text: 'Детям', path: '/children' }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className={`items ${menuOpen ? 'open' : ''}`}>
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${activeItem === index ? 'active' : ''}`}
                            onClick={() => handleItemClick(index, item.path)}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>
                <div className="right-side">
                    <div className="help-info">
                        <div>Нужна срочная помощь?</div>
                        <div>Обратитесь на <span>горячую линию</span></div>
                    </div>
                </div>
                <div className="burger-menu" onClick={toggleMenu}>
                    <div className={`burger-bar ${menuOpen ? 'clicked' : 'unclicked'}`}></div>
                    <div className={`burger-bar ${menuOpen ? 'clicked' : 'unclicked'}`}></div>
                    <div className={`burger-bar ${menuOpen ? 'clicked' : 'unclicked'}`}></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
