// getting session info in server component
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function () {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div>At course ID: </div>
      {JSON.stringify(session)}
    </div>
  );
}
