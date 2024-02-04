import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-900 h-[50px] px-[36px] flex flex-row items-center gap-[16px]">
      <Link className="text-white" to={"/"}>
        Home
      </Link>
      <Link className="text-white" to={"/signin"}>
        Signin
      </Link>
      <Link className="text-white" to={"/signup"}>
        Signup
      </Link>
      <Link className="text-white" to={"/dashboard"}>
        Dashboard
      </Link>
    </div>
  );
}

export default Navbar;
