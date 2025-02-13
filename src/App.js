import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar1 } from './Components/Navbar/Navbar';
import { Banner } from './Components/Banner/Banner';
import { Services } from './Components/Services/Services';
import { Team } from './Components/Team/Team';
import { Review } from './Components/Review/Review';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar1/>
    <Banner/>
    <Services/>
    <Team/>
    <Review/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
