import React from 'react';
import './footer.scss';

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
                        <li><a href="/parents">Для родителей</a></li>
                        <li><a href="/children">Для обучающихся</a></li>
                        <li><a href="/teachers">Для учителей</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Контакты</h3>
                    <p>Email: support@example.com</p>
                    <p>Телефон: +7 123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Все права защищены</p>
            </div>
        </footer>
    );
};

export default Footer;