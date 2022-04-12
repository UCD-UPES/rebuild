import "./Hero.css";
import logo from "../../assets/logo.svg";
export default function Hero() {
  return (
    <>
      <div class="container-max-width">
        <div class="columns">
          <div class="column left-panel">
            <p>
              First column <br />
              United Club Of Developers Is A Tech Oriented Student Chapter From
              UPES, Dheradun
            </p>
            <br />
            <div class="cta-wrapper">
              <a href="/home" id="cta1">
                Register Now
              </a>
              <a href="/home" id="cta2">
                Join Community
              </a>
            </div>
          </div>
          <div class="column right-panel">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}
