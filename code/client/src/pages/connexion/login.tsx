import '../../assets/style/login.css'
import { Register } from '../../service/api.security';
export default function Login() {
  return (
    <div className="login-page">
      <h1>Todo maker</h1>
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