import React from 'react'
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faBell, faBox, faBoxesPacking, faCalendar, faClock, faGrip, faHome, faMarsStrokeRight, faPager, faSave, faSearch, faTv, faUser, faUserFriends, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import {Link} from 'react-router-dom';
import localStorage from '../Task/Task';
import Api from '../API/Api';
const main1 = () => {
  return (
      <div className='section-one'>
          <ul>
             <li>
                <FontAwesomeIcon icon={faUser}/>
                <span>Lenin C S</span>
             </li>
             <li>
                <FontAwesomeIcon icon={faUserFriends}/>
                <Link className='task'  to="/Task">Task</Link>
             </li>
             <li>
                <FontAwesomeIcon icon={faUserGroup}/>
                <span><Link className='api' to="/Api">API</Link></span>
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


  )
}

export default main1