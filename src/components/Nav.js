import { useNavigate } from "react-router-dom";
import logo from "../images/Web/icons8-completed-task-windows-11-color-96.png";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="logo-container" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </div>
      <div className="controls-container">
        <button className="icon" onClick={() => navigate("/ticket")}>
          ➕
        </button>
        <button className="icon" onClick={() => navigate("/")}>
          ❮❮
        </button>
      </div>
    </nav>
  );
};

export default Nav;
