import React from 'react';
import './aboutsecond.scss';

const AboutSecond = () => {
    return (
        <section className="mainContent">
            <div className="aboutUs">
                <div className="logo">О сайте</div>
                <div className="text">
                    <p>
                        Целью данного проекта является предоставление родителям, учителям и обучающимся ценной информации и инструментов для
                        эффективной профилактики и противодействия этому явлению.
                    </p>
                    <p>
                        Данный сайт будет чрезвычайно полезен для общества, так как он способствует формированию осознанности о проблеме
                        буллинга, помогает выстраивать доверительные отношения между участниками образовательного процесса и создает условия
                        для конструктивного взаимодействия.
                    </p>
                </div>
            </div>
            <div className="image">
                <img
                    src="https://elcontacto.ru/files/journal/original/1650708599_da153f15ae5bb9c3672e76274580d2bf.png"
                    alt="Картинка"
                />
            </div>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </section>
    );
};

export default AboutSecond;