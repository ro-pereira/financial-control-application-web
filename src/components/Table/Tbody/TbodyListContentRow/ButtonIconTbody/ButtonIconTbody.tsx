import { IButtonIconTbody } from "../../../../../interface";
import "./buttonIconTbody.sass";

const ButtonIconTbody = ({
  icon,
  name,
  id,
  actionButton,
}: IButtonIconTbody) => {
  return (
    <button className="tbody__button-icon" data-text={name}>
      <img
        src={icon}
        alt={`icon__${name}`}
        className={`button-icon__${name}`}
        onClick={() => actionButton(id)}
      />
    </button>
  );
};

export default ButtonIconTbody;
