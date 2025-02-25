import ballonsImage from "../assets/images/birthday.jpg"
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { useState, useEffect } from "react";

const HeroSection = () => {
    const { width, height } = useWindowSize();
    const [confetti, setConfetti] = useState(false);
    const [daysWeHaveKnownEachOther, setDaysWeHaveKnownEachOther] = useState('');

    const handleClick = () => {
        setConfetti((prev) => !prev);
    }

    useEffect(() => {
        const now = new Date();
        const dayWeMet = new Date('2024-09-23');
        const diffTime = Math.abs(dayWeMet - now);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
        setDaysWeHaveKnownEachOther(diffDays);
    })


    return (
        <section className="hero">
            {confetti && <Confetti width={width} height={height} />}
            <div className="text">
                <div className="title"><h1>Hey, Tariro.</h1></div>
                <div className="content">
                    <p>I know I am not good at design as you are, but I try.</p>

                    <p>I just wanted to take a moment and say it has been {daysWeHaveKnownEachOther} days since we met. I never thought a friendship could mean this much in such a short period of time, but here we are.</p>

                    <p>Thank you for being there when I needed someone. Thank you for being my friend. Every day, I look forward to coming to campus because of you.</p>

                    <p>Lots of love, Nqabenhle.</p>
                </div>
                <button onClick={handleClick} className={confetti && 'button-shaking'}>Press Me! Hooray 🎉</button>

                <div className="gift-location">Find your gift <a href="https://github.com/lindelwa122/gift">here</a>.</div>
            </div>
            <div className="shade"></div>
            <div className="image-wrapper">
                <img src={ballonsImage} alt="Ballons" />
            </div>
        </section>
    )
};

export default HeroSection;