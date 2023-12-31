import React from 'react';
import './Vibe.css';
import AudioPlayer from "../AudioPlayer/AudioPlayer"; // Подключите ваш файл стилей
const Vibe = () => {
    return (
        <div>
            <div className="new-box">
                <h2>Как проходят занятия в нашей школе и какая методика?</h2>
                <p> С первого урока вы начинаете общаться на английском языке, ломаете свой барьер общения и стеснения.</p>
                <hr />
                <p>Обучение проходит по Оксфордской системе с использованием нестандартных методик и современных технологий.</p>
                <hr />
                <p>Вы будете практиковать язык с иностранными гостями, которые посещают нас каждый месяц.</p>
                <hr />
                <p>Мы стараемся делать уроки увлекательными и не похожими на предыдущие. Благодаря молодым профессионалам урок проходит на одной волне с учениками.</p>
            </div>
            <div className="second-box">
                <h1>8</h1>
                <p>филиалов</p>
                <p>в г. Алматы</p>
                </div>
            <div className="third-box">
                <div>
                    <h1>50</h1>
                    <p>оборудованных</p>
                    <p>кабинетов</p>
                </div>
            </div>
            <div className="fourth-box">
                <div>
                    <h1>250+</h1>
                    <p>сотрудников</p>
                </div>
            </div>
            <div className="fifth-box">
                <img src="/waves.png" alt="Waves Icon" className="waves-icon" />
                <h1 className="with-vertical-line">На наших курсах всегда играет музыка во время уроков</h1>
                <p>Создаем атмосферу, способствующую более эффективному и приятному обучению.</p>
            </div>

        </div>

    );
};

export default Vibe;
