import React from 'react';
import './aboutthird.scss';
import { Link } from 'react-router-dom';

const AboutThird = () => {
    return (
        <section className="thirdSection">
                    <div className="cards">
                        <div className="card">
                            <div className="card-image-container">
                                <img src="https://medaboutme.ru/upload/medialibrary/0e6/shutterstock_238704283.jpg" alt="Card 1" className="card-image" />
                            </div>
                            <h3 className="card-title">ДЛЯ РОДИТЕЛЕЙ</h3>
                            <p className="card-subtitle">Узнайте, как распознать буллинг и поддержать вашего ребенка</p>
                            <Link to="/parents" className="card-button">Узнать больше</Link>
                        </div>
                        <div className="card">
                            <div className="card-image-container">
                                <img src="https://gas-kvas.com/grafic/uploads/posts/2023-10/1696447021_gas-kvas-com-p-kartinki-shkolnikov-47.jpg" alt="Card 2" className="card-image" />
                            </div>
                            <h3 className="card-title">ДЛЯ ОБУЧАЮЩИХСЯ</h3>
                            <p className="card-subtitle">Научитесь защищаться и искать помощь в случае буллинга</p>
                            <Link to="/children" className="card-button">Узнать больше</Link>
                        </div>
                        <div className="card">
                            <div className="card-image-container">
                                <img src="https://yk24.ru/wp-content/uploads/2023/08/oy3Bsh9E-_vi9XVGBgju.jpg" alt="Card 3" className="card-image" />
                            </div>
                            <h3 className="card-title">ДЛЯ УЧИТЕЛЕЙ</h3>
                            <p className="card-subtitle">Эффективные стратегии предотвращения буллинга в классе</p>
                            <Link to="/teachers" className="card-button">Узнать больше</Link>
                        </div>
                    </div>
                </section>
    );
};

export default AboutThird;