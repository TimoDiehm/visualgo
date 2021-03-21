import React, { useEffect } from 'react';
import { anime } from 'react-anime';

const boxes = [];
const boxesAmount = 50;

for (let i = 0; i < boxesAmount; i++) {
    boxes.push(i);
}

const Background = (props) => {
    const moveSingleBox = ({ target }) => {
        anime({
            targets: `.${target.id}`,
            translateX: () => anime.random(-800, 800),
            translateY: () => anime.random(-300, -900),
            easing: 'linear',
            duration: 1500,
        });
    };

    const backgroundAnimation = () => {
        const timeline = anime.timeline();
        timeline
            .add({
                targets: '.wrapper',
                opacity: [0, 1],
                duration: 100,
                endDelay: 500,
            })
            .add({
                targets: '', ////////////////////////////////////////////// CLASSES !!!!!!!!!!
                scale: [0.5, 1],
                easing: 'spring(1, 100, 10, 10)',
                duration: 1000,
            })
            .add(
                {
                    targets: '.block',
                    opacity: 1,
                    translateX: () => anime.random(-800, 800),
                    translateY: () => anime.random(500, 3000),
                    scaleX: () => anime.random(1, 2),
                    scaleY: () => anime.random(1, 5),
                    easing: 'linear',
                    duration: 1500,
                    delay: anime.stagger(5),
                },
                '-=1500'
            )
            .add(
                {
                    targets: '.Home_main__1x8gC',
                    opacity: [0, 1],
                    rotateX: [-90, 0],
                    duration: 1000,
                    easing: 'linear',
                },
                '-=1500'
            )
            .add(
                {
                    targets: '.main-header',
                    rotateX: [-90, 0],
                    duration: 1000,
                    easing: 'linear',
                },
                '-=1000'
            )
            .add(
                {
                    targets: ['.main-navigation-logo-img', '.Home_title_logo_img__1gmXd'],
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    duration: 300,
                    easing: 'easeInOutQuad',
                },
                '-=300'
            )
            .add({
                targets: '.Home_title_logo_img__1gmXd path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1000,
            })
            .add(
                {
                    targets: '.Home_title_logo_img__1gmXd path',
                    fill: 'rgba(0, 255, 234, 1)',
                    easing: 'linear',
                    duration: 1000,
                },
                '-=500'
            );
    };

    useEffect(() => backgroundAnimation(), []);

    return (
        <div className="background-container">
            {boxes.map((boxNum) => (
                <div
                    key={`box-${boxNum}`}
                    className={`block box-${boxNum}`}
                    id={`box-${boxNum}`}
                    onClick={moveSingleBox}
                ></div>
            ))}
        </div>
    );
};

export default Background;
