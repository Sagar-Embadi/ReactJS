import { Banner } from './banner';
import './App.css';

function App() {
  return (
    <>
    <div className="navBar">
      <img src="https://th.bing.com/th/id/OIP.zH8EcYfZu-XSs1P07GyFxQHaCq?w=340&h=126&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Nike"/>
      <div className="navItems">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Services</span>
      </div>
      <div className="navButtons">
        <button>Log-In</button>
        <button>Sign-Up</button>
      </div>
    </div>
    <br/>
    <Banner></Banner>
    </>
  );
}

export default App;
