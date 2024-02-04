import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const navigate = useNavigate();

  const handleTransfer = async () => {
    navigate(`/transfer/${user._id}`);
  };

  return (
    <div>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row gap-[16px] items-center">
          <div className="w-[36px] h-[36px] text-center py-[4px] rounded-full bg-white font-bold text-gray-900">
            {user.firstName[0]}
          </div>
          <h4>
            {user.firstName} {user.lastName}
          </h4>
        </div>
        <button
          onClick={handleTransfer}
          className="rounded px-[12px] py-[6px] bg-white text-gray-900 cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default UserCard;
