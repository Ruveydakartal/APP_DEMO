import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ROUTES from "../../consts/routes";
import Home from "../home/home";
import style from "./authentication.module.css";
import Header from "../../components/home/header/header";
import Footer from "../../components/home/footer/footer";
import NotFound from "../notFound/notFound";
import AuthContainer from "../../contexts/AuthContainer";
import Login from "../login/login";
import Register from "../registration/registration";
import ForSale from "../forSale/forSale";
import ForRent from "../forRent/forRent";
import Offices from "../offices/offices";
import Detail from "../detail/detail";
import Profile from "../profile/profile";
import Favorites from "../favorites/favorites";

const Authentication = () => {
  return (
    <div className={`${style.wrap}`}>
      <Router>
  
        <AuthContainer>
        <Header />
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.register} element={<Register />} />
            <Route path={ROUTES.forSale} element={<ForSale />} />
            <Route path={ROUTES.forRent} element={<ForRent />} />
            <Route path={ROUTES.offices} element={<Offices />} />
            <Route path={ROUTES.detail.path} element={<Detail />} />
            <Route path={ROUTES.profile} element={<Profile />} />
            <Route path={ROUTES.favorites} element={<Favorites />} />
            <Route path={ROUTES.notFound} element={<NotFound />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
            <Footer />
        </AuthContainer>
      </Router>
    </div>
  );
};

export default Authentication;
