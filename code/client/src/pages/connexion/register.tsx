import { Register } from "../../service/api.security";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotice } from "../../provider/noticeContext";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setNotice } = useNotice();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await Register(email, password);
    if (response.status === 200) {
      setNotice("Register success");
      navigate("/");
    } else {
      setNotice("Register failed, email already exists");
    }
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" id="email" name="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="password" id="password" name="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}