import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="">
      I'm Home
      <Link to="/app">App</Link>
    </div>
  );
}

export default Home;
