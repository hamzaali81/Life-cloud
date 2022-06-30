import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProfileEdit from './pages/profile/edit-proile';
import ProfileCreate from './pages/profile/ProfileCreate';
import MainProfileCreate from './pages/profile/MainProfileCreate';
import ProfileDetails from './pages/profile/ProfileDetails';
import MainProfileDetails from './pages/profile/MainProfileDetails';
import MemoryCreation from './components/memory/memoryCreation';
import Shop from './pages/shop/Shop';
import Plans from './pages/plans/Plans';
import Qa from './pages/qa/Qa';
import Contact from './pages/contact/Contact';
import Policy from './pages/policy/Policy';
import { UserAndprofiles } from './pages/userpage/user-and-profile';
import ENHome from './pages/home/ENHome';
import ENPlans from './pages/plans/ENPlans';
import ENShop from './pages/shop/ENShop';
import ENLogin from './pages/login/ENLogin';
import ENRegister from './pages/register/ENRegister';
import ENOrganisationRegister from './pages/register/ENOrganisationRegister';
import OrganisationRegister from './pages/register/OrganisationRegister';
import ENOrganisationDetails from './pages/organisation/ENOrganisationDetails';
import ENProfileEdit from './pages/profile/ENEditProfile';
import ENProfileCreate from './pages/profile/ENProfileCreate';
import ENMainProfileCreate from './pages/profile/ENMainProfileCreate';
import ENProfileDetails from './pages/profile/ENProfileDetails';
import { ENUserAndprofiles } from './pages/userpage/ENUser-and-profile';
import { AuthContext } from './context/AuthContext';
import { useContext, useState } from 'react';
import Memory from './pages/profile/Memory.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
function App() {
  const { user, myFirebase } = useContext(AuthContext);
  const [language, setLanguage] = useState(
    localStorage.getItem('lang') || 'heb'
  );
  const redirectPath = myFirebase.redirectPath || '/';
  return (
    <>
      <Router>
        {language === 'heb' ? (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile/:profileId/memory/:memoryId">
              <Memory />
            </Route>
            <Route exact path="/login">
              {user ? <Redirect to={redirectPath} /> : <Login />}
            </Route>
            <Route exact path="/register">
              {user ? <Redirect to={redirectPath} /> : <Register />}
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/createprofile/:id">
              <ProfileCreate />
            </Route>
            <Route exact index path="/profiledetails/:id">
              <ProfileDetails />
            </Route>
            <Route exact path="/mainprofiledetails/:id">
              <MainProfileDetails />
            </Route>
            <Route exact path="/userprofiles/:id">
              <UserAndprofiles />
            </Route>
            <Route exact path="/editprofiles/:id">
              <ProfileEdit />
            </Route>
            <Route exact path="/memorycreation/:profileid">
              <MemoryCreation />
            </Route>
            {/* <Route exact path="/shop">
              <Shop />
            </Route> */}
            <Route exact path="/organisationregister">
              <OrganisationRegister />
            </Route>
            <Route exact path="/contact-us">
              <Contact />
            </Route>
            <Route exact path="/policy">
              <Policy />
            </Route>
            <Route exact path="/createmainprofile/:id">
              <MainProfileCreate />
            </Route>
            <Route exact path="/memory/:id">
              <Memory />
            </Route>
            <Route exact path="/plans">
              <Plans />
            </Route>
            <Route exact path="/qa">
              <Qa />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/">
              <ENHome />
            </Route>
            <Route exact path="/login">
              {user ? <Redirect to={redirectPath} /> : <ENLogin />}
            </Route>
            <Route exact path="/register">
              {user ? <Redirect to={redirectPath} /> : <ENRegister />}
            </Route>
            <Route exact path="/organisationregister">
              <ENOrganisationRegister />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/plans">
              <ENPlans />
            </Route>
            {/* <Route exact path="/shop">
              <ENShop />
            </Route> */}
            <Route exact path="/createprofile/:id">
              <ENProfileCreate />
            </Route>
            <Route exact path="/createmainprofile">
              <ENMainProfileCreate />
            </Route>
            <Route exact path="/profiledetails/:id">
              <ENProfileDetails />
            </Route>
            <Route exact path="/organisationdetails">
              <ENOrganisationDetails />
            </Route>
            <Route exact path="/userprofiles/:id">
              <ENUserAndprofiles />
            </Route>
            <Route exact path="/editprofiles/:id">
              <ENProfileEdit />
            </Route>
            <Route exact path="/memorycreation/:profileid">
              <MemoryCreation />
            </Route>
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
