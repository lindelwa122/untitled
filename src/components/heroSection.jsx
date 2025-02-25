import ballonsImage from "../assets/images/birthday.jpg"

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="text">
                <div className="title"><h1>Lorem, ipsum.</h1></div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius omnis autem!</p>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate laudantium quibusdam aspernatur ipsa libero ad iure nulla dicta repellendus, aut labore distinctio perferendis est amet asperiores ducimus necessitatibus corrupti! Est doloremque necessitatibus sed ipsa aliquid?</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolores atque necessitatibus obcaecati quod repellendus a amet, ab voluptates in harum nesciunt provident sit dolor corporis voluptate nobis fugit veniam repudiandae magnam? Exercitationem, esse!</p>

                    <p>Lorem ipsum dolor sit.</p>
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