import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <a href='#'>
                USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='#'>
                English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='#'>
                Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <Link exact to='/login'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
                <span className={styles.login}>Login</span>
              </Link>
            </li>
            <li>
              
              <FontAwesomeIcon className={styles.icon} icon={faUser} />
              <Link to={'/login'} className={styles.login}>
                Login
              </Link>
            </li>
            <li>
              <FontAwesomeIcon className={styles.icon} icon={faLock} />
              <Link to={'/register'} className={styles.register}>
                Register
              </Link>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
