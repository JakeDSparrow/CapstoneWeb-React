import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "./LoginPage.css";
import Logo from "../assets/GoRescueLogo.webp";

const firebaseConfig = {
  apiKey: "AIzaSyDCNCYf0jP38sMHx1Oh8sYv_kKNdbVT84s",
  authDomain: "go-rescue-database.firebaseapp.com",
  projectId: "go-rescue-database",
  storageBucket: "go-rescue-database.firebasestorage.app",
  messagingSenderId: "389741892505",
  appId: "1:389741892505:web:1f92bbe55da184f5aff908"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      if (!email || !password) throw new Error("Please enter both email and password");

      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      const userDocRef = doc(db, "mdrrmo-users", uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await auth.signOut();
        throw new Error("Account not authorized. Contact admin.");
      }

      const role = userDoc.data().role?.toLowerCase();
      if (role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else if (role === "dispatcher") {
        window.location.href = "dispatcher-dashboard.html";
      } else {
        await auth.signOut();
        throw new Error("Your account does not have access to this portal.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

 return (
    <div className="login-container">
      <div className="login-main">
        <div className="login-logo-section">
          <img 
            src={Logo} 
            alt="GoRescue Logo" 
            className="login-logo" 
          />
        </div>
        <div className="login-form-section">
          <h1 className="login-title">GoRescue Login</h1>
          <div className="login-form">
            <div className="login-input-group">
              <input 
                type="email" 
                className="login-input"
                placeholder="Email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
              />
            </div>

            <div className="login-input-group">
              <input 
                type="password" 
                className="login-input"
                placeholder="Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
              />
            </div>

            <div className="login-remember">
              <input 
                type="checkbox" 
                id="remember" 
                checked={remember} 
                onChange={e => setRemember(e.target.checked)} 
              />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button 
              className="login-button" 
              onClick={handleLogin} 
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            {error && <div className="login-error">{error}</div>}
            {loading && <div className="login-loading">Authenticating...</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
