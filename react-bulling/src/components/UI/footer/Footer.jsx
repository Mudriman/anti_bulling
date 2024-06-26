import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>О нас</h3>
                    <p>Мы стремимся создать безопасную среду для всех учащихся, предоставляя ресурсы и поддержку для борьбы с буллингом.</p>
                </div>
                <div className="footer-section links">
                    <h3>Полезные ссылки</h3>
                    <ul>
                        <li><Link to="/parents">Для родителей</Link></li>
                        <li><Link to="/children">Для обучающихся</Link></li>
                        <li><Link to="/teachers">Для учителей</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Контакты</h3>
                    <p>Email: support@example.com</p>
                    <p>Телефон: 8 800 707 70 22</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Все права защищены</p>
            </div>
        </footer>
    );
};

export default Footer;