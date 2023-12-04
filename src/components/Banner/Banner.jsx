import Airgone from "../../assets/images/icons/airgone.png";
import Frame from "../../assets/images/backgrounds/frame.png";
import X from "../../assets/images/icons/x.png";
import Instagram from "../../assets/images/icons/instagram.png";
import Facebook from "../../assets/images/icons/facebook.png";
import Opensea from "../../assets/images/icons/opensea.png";

export default function Banner() {
  return (
    <>
      <div className="smoke"></div>
      <div className="banner">
        <div className="banner__content">
          <img
            className="banner__content__frame"
            src={Frame}
            alt="Cadre tâche de peinture"
          />
          <img
            className="banner__content__logo"
            src={Airgone}
            alt="Logo d'Airgone"
          />
        </div>
        <div className="banner__socialNetworks">
          <a
            href="https://www.instagram.com/airgone_fr/"
            className="banner__socialNetworks__link"
            title="Lien vers mon profil Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="banner__socialNetworks__logo"
              src={Instagram}
              alt="instagram logo"
            />
          </a>
          <a
            href="https://www.facebook.com/airgone/"
            className="banner__socialNetworks__link"
            title="Lien vers mon profil Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="banner__socialNetworks__logo"
              src={Facebook}
              alt="facebook logo"
            />
          </a>
          <a
            href="https://twitter.com/AirgoneFr"
            className="banner__socialNetworks__link"
            title="Lien vers mon profil X"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="banner__socialNetworks__logo"
              src={X}
              alt="X logo"
            />
          </a>
          <a
            href="https://opensea.io/collection/airgone"
            className="banner__socialNetworks__link"
            title="Lien vers mon profil Opensea"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="banner__socialNetworks__logo"
              src={Opensea}
              alt="opensea logo"
            />
          </a>
        </div>
      </div>
    </>
  );
}
