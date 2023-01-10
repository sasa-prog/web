import './nav.css';

import { Link } from 'react-router-dom';

const Nav = (props)=> {
  return (
    <>
       <nav className="nav">
         <ul className="navUl">
           <Link to="/"><li className="navLi">TOP</li></Link>
           <Link to="/bgm"><li className="navLi">BGM</li></Link>
         </ul>
       </nav>
    </>
  );
}


export default Nav;
