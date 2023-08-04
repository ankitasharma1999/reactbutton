// //import logo from './logo.svg';
// //import './App.css';
// // import Bodyy from "./project1/body";
// // import Header from "./project1/header";
// // import Car from "./project1/prop" ;
// //import Message from './project1/state1';
// //import Counter from "./project1/counter";
// // import FunctionComponent  from  "./project1/functioncounter";

// // import Hooks from "./project1/useeffect";
// import Comp from "./project1/form123";
// // import Bgcolor from "./project1/background";
// function App() {
//   return (
//     <div >
//       {/* <Header />
//       <Bodyy /> */}
//       {/* <Car /> */}
//       {/* <Message /> */}
//       {/* <Counter /> */}
//       {/* <functioncounter></functioncounter> */}
//       {/* <Bgcolor /> */}
//       {/* < Hooks /> */}
//       <Comp />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './project1/home';
import Page1 from './project1/page1';
import Page2 from './project1/page2';
import Page3 from './project1/page3';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the Home Page</h1>
        <nav>
          <ul>
            <li>
              <Link to="/project1/page1">Go to Page 1</Link>
            </li>
            <li>
              <Link to="/project1/page2">Go to Page 2</Link>
            </li>
            <li>
              <Link to="/project1/page3">Go to Page 3</Link>
            </li>
          </ul>
        </nav>

        <Route path="/project1/home" exact component={Home} />
        <Route path="/project1/page1" component={Page1} />
        <Route path="/project1/page2" component={Page2} />
        <Route path="/project1/page3" component={Page3} />
      </div>
    </Router>
  );
};

export default App;
