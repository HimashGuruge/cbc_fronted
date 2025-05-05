import { Link } from 'react-router-dom';
import './loginPage.css';
export default function LoginPage() {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>

            <Link to="/" className="home-link">Back to Home</Link>
        </div>
    );
}