import musicBotImg from "../assets/music-bot.png";
import gymAppImg from "../assets/gym-app.png";
import cardAppImg from "../assets/card-app.png";

export default function Projects() {
  return (
    <div>
      <h1 className="title-one">Portfolio</h1>

      <div>
        <h2 className="title-style">Github Personalized Feedback</h2>
        <div className="center-container">
          <img className="appphoto" src={musicBotImg} alt="Python Music Bot" />
        </div>
      </div>

      <div>
        <h2 className="title-style">Amazon Price tracker trends</h2>
        <div className="center-container">
          <img className="appphoto" src={gymAppImg} alt="Gym App" />
        </div>
      </div>

      <div>
        <h2 className="title-style">Sign-inform</h2>
        <div className="center-container">
          <img className="appphoto" src={cardAppImg} alt="Family Credit Card App" />
        </div>
        
      </div>
    </div>
  );
}
