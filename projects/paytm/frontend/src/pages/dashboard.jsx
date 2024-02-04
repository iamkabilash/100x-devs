import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/account/balance`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => setBalance(res.data.balance))
        .catch((err) => console.log(err.message));
    };
    const fetchUsers = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/user/friends`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => setUsers(res.data.users))
        .catch((err) => console.log(err.message));
    };
    fetchBalance();
    fetchUsers();
  }, []);

  const handleUserSearch = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/user/bulk?filter=${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err.message));
  };

  return (
    <section className="min-h-[calc(100vh-50px)] w-full bg-gray-800 p-[36px]">
      <div className="max-w-[900px] text-white flex flex-col items-start justify-start gap-[24px] m-auto">
        <div>
          <h1 className="text-xl font-semibold">Your balance Rs. {balance}</h1>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-[8px]">
          <h2 className="text-lg font-semibold">Users</h2>
          <form
            onSubmit={handleUserSearch}
            className="w-full flex flex-row items-center justify-between gap-[16px]"
          >
            <input
              type="text"
              placeholder="Search users"
              className="rounded px-[8px] py-[6px] w-[300px] text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="rounded px-[12px] py-[6px] bg-white text-gray-900 cursor-pointer">
              Search
            </button>
          </form>
        </div>
        <div className="w-full flex flex-col gap-[24px]">
          {users &&
            users.map((user) => <UserCard key={user._id} user={user} />)}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
