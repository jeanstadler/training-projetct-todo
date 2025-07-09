import '../../assets/style/login.css'
import { useNotice } from '../../provider/noticeContext';
export default function Login() {
  const { notice } = useNotice();
  return (
    <div className="login-page">
      <h1>Todo maker</h1>
      {notice && <div className="notice-success">{notice}</div>}
      <form>
        <div>
          <input type="email" id="username" name="username" required placeholder='email' />
        </div>
        <div>
          <input type="password" id="password" name="password" required placeholder='password' />
        </div>
        <button type="submit">Login</button>
        <a href="/register">
          <button type="button">Register</button>
        </a>
      </form>
    </div>
  );
}