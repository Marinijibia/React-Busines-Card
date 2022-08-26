import email from '../Assests/icons8-mail-24.png'
import linkedin from '../Assests/icons8-linkedin-2.svg'

const Name = () => {
  return (
    <div className="main-name">
      <h1>Umar Falalu</h1>
      <p className="name-p1">Fullstack Developer</p>
      <p className="name-p2">umarfalalu.dev</p>
      <div className="btn-div">
        <button className="btn-1">
          <a href="mailto:marinijibiaa@gmail.com">
            <img src={email} alt="Mail Logo" className="logo-2" />
          </a>
          <span className="btn--text-1">Email</span>
        </button>
        <button className="btn-2">
          <a
            href="https://www.linkedin.com/in/umar-falalu-37383776/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Mail Logo" className="logo-1" />
          </a>
          <span className="btn--text-2">Linkedin</span>
        </button>
      </div>
    </div>
  );
};

export default Name;
