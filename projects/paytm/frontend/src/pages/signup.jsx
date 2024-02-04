import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const handleSignup = async () => {
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, {
        ...signupData,
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
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="firstName"
              placeholder="First Name"
              value={signupData.firstName}
              onChange={(e) =>
                setSignupData({ ...signupData, firstName: e.target.value })
              }
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastName"
              placeholder="Last Name"
              value={signupData.lastName}
              onChange={(e) =>
                setSignupData({ ...signupData, lastName: e.target.value })
              }
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={signupData.username}
              onChange={(e) =>
                setSignupData({ ...signupData, username: e.target.value })
              }
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={handleSignup}
            >
              Create Account
            </button>
          </div>
          <div className="text-grey-dark mt-6">
            Already have an account?&nbsp;
            <Link
              className="no-underline border-b border-blue text-blue"
              to={"/signin"}
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
