import axios from "axios";
import { signup } from "@/actions/users";
import { useRouter } from "next/navigation";

export default function Esign({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const router = useRouter();
  console.log(username, password);
  return (
    <>
      <button
        onClick={async () => {
          const response = await signup(username, password);
          //   localStorage.setItem("token", response);
          router.push("/");
        }}
        type="button"
        className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Sign in
      </button>
    </>
  );
}
