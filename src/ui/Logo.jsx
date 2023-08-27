import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="text-center">
      <Link to="/" className="text-3xl font-extrabold text-white">
        justCode{"</>"}
      </Link>
    </div>
  );
}

export default Logo;
