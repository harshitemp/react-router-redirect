import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome to Dashboard</h1>
        <p>You have successfully logged in!</p>
        <Link to="/" className="back-link">Logout</Link>
      </div>
    </div>
  );
}
