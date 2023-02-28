import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonIcon = ({ text, icon}) => {
  return (
    <div className="download">
      {text.toLowerCase() === "download cv" ? (
        <a download={"Alyasar Jabbarli.pdf"} href="./Alyasar Jabbarli.pdf">
          {text}
        </a>
      ) : text === "Hire Me" ? (
        <button
          onClick={() =>
            (window.location.href = "mailto:alyasar.jabbarli@gmail.com")
          }
        >
          {text}
        </button>
      ) : (
        <button type="submit">{text}</button>
      )}
      {icon != null ? (
        <FontAwesomeIcon className="dwn-icon" icon={icon} />
      ) : null}
    </div>
  );
};

export default ButtonIcon;
