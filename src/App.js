import Homepage from "./Pages/Homepage";
import OurWork from "./Pages/OurWork";
import ProgramsPage from "./Pages/ProgramsPage";
import RamadanPage from "./Pages/RamadanPage";
import Gift from "./Pages/GiftPage";
import AboutUs from "./Pages/AboutUs";
import SuccessStoris from "./Pages/SuccessStories";
import SuccessStorisDetails from "./Pages/SuccessStoriesDetails";
import WereWeWork from "./Pages/WereWeWork";
import News from "./Pages/News";

import { BrowserRouter  as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import OurWorkAllPages from "./Pages/OurWorkAllPages";
import ContactPage from "./Pages/ContactPage";
import Loader from "./Components/Loader";
import NewsDitails from "./Pages/NewsDitails";
import CountryPage from "./Pages/CountryPage";
import CountryPageDetails from "./Pages/CountryPageDetails";
import udhia from "./Pages/Udhia";
import MentalHealth from "./Pages/MentalHealth";
import Academy from "./Pages/Academy";
import Covid from "./Pages/Covid";

import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Success from "./Pages/Success";
import Donate from "./Pages/Donate";

const stripePromise = loadStripe('pk_test_51JFgYHIxIkfRH8ZcEdy4Joq0rIpaLhCMCVOFWfcURaZH3GEeFrK9z3voa57AUGzgxkMqiWLdQrGhsRTdDhBjybQb00Z59anrKb');
// pk_live_PJ3d112j4l1BA5tPJfJpbvWB
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init("443092934245423", options);

ReactGA.initialize("UA-212490010-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  const stripe_options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51JFgYHIxIkfRH8ZcmtIkWvtscosKK1qeMSWb2OJ1BE3paMAWAVsgriOqHovPEvQTcO0FCn44TWJGbw9Ec8ZHPx1R00TnM7q3j3',
  };
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route exact path="/home-page" component={Homepage} />
        <Route path="/our-work" component={OurWork} />
        <Route path="/programs" component={ProgramsPage} />
        <Route path="/services/:id" component={OurWorkAllPages} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/ramadan" component={RamadanPage} />
        <Route path="/Loader" component={Loader} />
        <Route path="/gift" component={Gift} />
        <Route path="/about-us" component={AboutUs} />
        <Route exact path="/their-stories" component={SuccessStoris} />
        <Route path="/their-stories/:id" component={SuccessStorisDetails} />
        <Route exact path="/where-we-work" component={WereWeWork} />
        <Route path="/where-we-work/:id" component={CountryPage} />
        <Route exact path="/news" component={News} />
        <Route path="/news-details/:id" component={NewsDitails} />
        <Route path="/country" component={CountryPage} />
        <Route path="/country-details/:id" component={CountryPageDetails} />
        <Route path="/udhia" component={udhia} />
        <Route path="/mental-health" component={MentalHealth} />
        <Route path="/academy" component={Academy} />
        <Route path="/covid_19" component={Covid} />
        <Route path="/success" component={Success} />
        <Route path="/donate" component={Donate} />
      </Router>
    </div>
  );
}

export default App;
