"use client";

import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Esign from "./esign";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <>
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
          >
            <div>
              <div className="px-10">
                <div className="text-3xl font-extrabold">Sign up</div>
              </div>
              <div className="pt-2">
                <input
                  name="username"
                  value={username}
                  onChange={(e) => {
                    console.log(e.target.value, "username");
                    setUsername(e.target.value);
                  }}
                  placeholder="harkirat@gmail.com"
                />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type={"password"}
                  placeholder="123456"
                />
                {/* ignore type */}
                <Esign username={username} password={password} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
