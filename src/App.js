
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/review/Review';
import NotFound from './components/NotFound/NotFound';
import Manage from './components/Manage/Manage';
import ProductDetail from './components/ProductDetail/ProductDetail';





function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path = '/shop'>
            <Shop></Shop>
          </Route>
          <Route path = '/review'>
            <Review></Review>
          </Route>
          <Route path = '/manage'>
             <Manage></Manage>
          </Route>
          <Route exact path = '/'>
            <Shop></Shop>
          </Route>
          <Route path = '/product/:productKey'>
            <ProductDetail></ProductDetail>
          </Route>
          <Route path = '*'>
             <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>


      {/* <Header></Header> */}
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
