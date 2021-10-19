import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking/Booking';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
   <Router>
     <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/login">
        <Login></Login>
       </Route>
         <Route path="/booking/:serviceId">
           <Booking></Booking>

         </Route>

       <Route path="*">
        <NotFound></NotFound>
       </Route>
     </Switch>
   </Router>
   <Footer></Footer>
    </div>
  );
}

export default App;


// https://preview.themeforest.net/item/physio-plus-physiotherapy-physical-therapy-wordpress-theme/full_screen_preview/16775879?_ga=2.38008864.2057324817.1634545419-1199915584.1634492717
