import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/Booking/About/About';
import Booking from './Pages/Booking/Booking/Booking';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Home/Register/Register';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
   <AuthProvider>
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
       <Route path="/register">
         <Register></Register>
       </Route>

         <PrivateRoute path="/booking/:serviceId">
           <Booking></Booking>

         </PrivateRoute>
         <PrivateRoute path="/about/:therapistId">
           <About></About>
           </PrivateRoute>

       <Route path="*">
        <NotFound></NotFound>
       </Route>
     </Switch>
   </Router>
   </AuthProvider>
   <Footer></Footer>
    </div>
  );
}

export default App;


// https://preview.themeforest.net/item/physio-plus-physiotherapy-physical-therapy-wordpress-theme/full_screen_preview/16775879?_ga=2.38008864.2057324817.1634545419-1199915584.1634492717
