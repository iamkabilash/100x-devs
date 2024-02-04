import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SendMoney() {
  const params = useParams();
  const { to } = params;
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);

  const handleTransfer = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/account/transfer`,
        {
          to,
          amount: parseInt(amount),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => navigate("/dashboard"))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="min-h-[calc(100vh-50px)] bg-gray-800 p-[36px] text-white flex flex-col gap-[16px]">
      <h2 className="text-lg font-semibold">Send Money</h2>
      <form
        onSubmit={handleTransfer}
        className="w-full flex flex-row items-center justify-start gap-[16px]"
      >
        <input
          className="rounded px-[8px] py-[6px] w-[300px] text-gray-900"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          name="amount"
          placeholder="Enter amount"
        />
        <button className="rounded px-[12px] py-[6px] bg-white text-gray-900 cursor-pointer">
          Initiate transfer
        </button>
      </form>
    </div>
  );
}

export default SendMoney;
