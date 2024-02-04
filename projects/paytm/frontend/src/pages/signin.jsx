import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [signinData, setSigninData] = useState({
    username: "",
    password: "",
  });

  const handleSignin = async () => {
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/signin`, {
        ...signinData,
      })
      .then((res) => localStorage.setItem("token", res.data.token))
      .then(() => navigate("/dashboard"))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="min-h-[calc(100vh-50px)] bg-gray-800 p-[36px] text-white">
      <div className="bg-grey-lighter h-[100%] flex flex-col mt-[36px]">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign in</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={signinData.username}
              onChange={(e) =>
                setSigninData({ ...signinData, username: e.target.value })
              }
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={signinData.password}
              onChange={(e) =>
                setSigninData({ ...signinData, password: e.target.value })
              }
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={handleSignin}
            >
              Sign in
            </button>
          </div>
          <div className="text-grey-dark mt-6">
            Don't have an account?&nbsp;
            <Link
              className="no-underline border-b border-blue text-blue"
              to={"/signup"}
            >
              Sign up
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
