import ballonsImage from "../assets/images/birthday.jpg"

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="text">
                <div className="title"><h1>Hey, Clariana.</h1></div>
                <div className="content">
                    <p>I know I am not good at design as you are, but I try.</p>

                    <p>I just wanted to take a moment and say it has been 158 days since we met. I never thought a friendship could mean this much in such a short period of time, but here we are.</p>

                    <p>Thank you for being there when I needed someone. Thank you for being my friend. Every day, I look forward to coming to campus because of you.</p>

                    <p>Lots of love, Nqabenhle.</p>
                </div>
                <button>Press Me! Hooray 🎉</button>
            </div>
            <div className="shade"></div>
            <div className="image-wrapper">
                <img src={ballonsImage} alt="Ballons" />
            </div>
        </section>
    )
};

export default HeroSection;