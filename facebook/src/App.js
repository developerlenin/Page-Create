import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faBell, faBox, faBoxesPacking, faCalendar, faClock, faGrip, faHome, faMarsStrokeRight, faPager, faSave, faSearch, faTv, faUser, faUserFriends, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className='facebook'>
    <div className='nav'>
       <div className='navone'>
          <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          <div>
             <div className='search'>
                <form className='form-box'>
                   <input className='input-box' type="text" placeholder="Facebook.." />
                   <button className='class-button'>
                      <FontAwesomeIcon icon={faSearch} />
                   </button>
                </form>
             </div>
          </div>
       </div>
       <div className="navtwo">
          <ul>
             <li>
                <FontAwesomeIcon icon={faHome} />
             </li>
             <li>
                <FontAwesomeIcon icon={faTv} />
             </li>
             <li>
                <FontAwesomeIcon icon={faBox} />
             </li>
             <li>
                <FontAwesomeIcon icon={faTv} />
             </li>
             <li>
                <FontAwesomeIcon icon={faBoxesPacking} />
             </li>
          </ul>
       </div>
       <div className='navthree'>
          <ul>
             <li>
                <FontAwesomeIcon icon={faFacebookMessenger}/>
             </li>
             <li>
                <FontAwesomeIcon icon={faBell}/>
             </li>
             <li>
                <FontAwesomeIcon icon={faUser}/>
             </li>
             <li></li>
          </ul>
       </div>
    </div>
    <div className='section'>
       <div className='section-one'>
          <ul>
             <li>
                <FontAwesomeIcon icon={faUser}/>
                <span>Lenin C S</span>
             </li>
             <li>
                <FontAwesomeIcon icon={faUserFriends}/>
                <span>Friend</span>
             </li>
             <li>
                <FontAwesomeIcon icon={faUserGroup}/>
                <span>Groups</span>
             </li>
             <li>
                <FontAwesomeIcon icon={faMarsStrokeRight}/>
                <span>Marketplace</span>
             </li>
             <li>
                <FontAwesomeIcon icon={faTv}/>
                <span>Watch</span>
             </li>
             <li>
                <FontAwesomeIcon icon={faClock}/>
                <span>Reminder</span>
             </li>
             <li>
                <FontAwesomeIcon icon={faSave}/>
                <span>Save</span>
             </li>
             <li>
                <FontAwesomeIcon icon={faPager}/>
                <span>Pages</span>
             </li>
             <li>
                <FontAwesomeIcon icon={faVideo}/>
                <span>Reels</span>
             </li>
             <li>
                <FontAwesomeIcon icon={faCalendar}/>
                <span>Function</span>
             </li>
             <li>
                <FontAwesomeIcon icon={faUserGroup}/>
                <span>More</span>
             </li>
          </ul>
       </div>
       <div className='section-two'>
          <div className='img-one'>
             <div className="container" style={{padding: '25px 120px'}}>
             <div className="card" style={{width:'350px'}}>
                <img className="card-img-top" src="/img/putin.png" style={{height:'300px'}}/>
                <div className="card-body">
                   <h4 className="card-title">Vladimir Putin</h4>
                   <p className="card-text"> President of Russia</p>
                   <a href="#" className="btn btn-primary">Add Friend</a>
                </div>
             </div>
          </div>
       </div>
       <div className='img-one'>
          <div className="container" style={{padding: '25px 120px'}}>
          <div className="card" style={{width:'350px'}}>
             <img className="card-img-top" src="/img/Rahul.png" style={{height:'300px'}}/>
             <div className="card-body">
                <h4 className="card-title">Rahul Gandhi </h4>
                <p className="card-text">President of All India Congress </p>
                <a href="#" className="btn btn-primary">Add Friend</a>
             </div>
          </div>
       </div>
    </div>
    <div className='img-one'>
       <div className="container" style={{padding: '25px 120px'}}>
       <div className="card" style={{width:'350px'}}>
          <img className="card-img-top" src="/img/Stalin.png" style={{height:'300px'}}/>
          <div className="card-body">
             <h4 className="card-title">M K Stalin</h4>
             <p className="card-text">C M  of TamilNadu</p>
             <a href="#" className="btn btn-primary">Add Friend</a>
          </div>
       </div>
    </div>
 </div>
 <div className='img-one'>
    <div className="container" style={{padding: '25px 120px'}}>
    <div className="card" style={{width:'350px'}}>
       <img className="card-img-top" src="/img/putin.png" style={{height:'300px'}}/>
       <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          <p className="card-text">USA</p>
          <a href="#" className="btn btn-primary">Add Friend</a>
       </div>
    </div>
 </div>
 </div>
 </div>
 <div className='section-three'>
    <div className='news'>
       <p style={{fontSize:"30px",textAlign:'center'}}>News Feed</p>
       <img src="/img/new1.png"style={{width:"auto"}}/>
       <img src="/img/new2.png"style={{width:"auto"}}/>
    </div>
 </div>
 </div>
 </div>
  );
}

export default App;
