import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AddUser} from "./component/add-user";
import {Home} from "./pages/home";
import {ContactUs} from "./pages/contact-us";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Home />}/>
              <Route path={'/contact-us'} element={<ContactUs />}/>
              <Route path={'/add-user'} element={<AddUser />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
