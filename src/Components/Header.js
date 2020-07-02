import React, { Component } from 'react';
import '../Components/Header.css';
import styles from '../Components/Header.module.css';

class Header extends Component {
  render() {
    return (
      
      <div className= "Header">
        <body>
          <div className={styles.headre}>
            <div className={styles.container}>
              <nav>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Product Catalogue</a>
                <a href="#">The Squad</a>
                <a href="#">Get in Touch</a>
              </nav>
            </div>
          </div>
          <div className={styles.container}>
            <p>Welcome to DevState</p>
          </div>    
          <div className={styles.footere}>
            <div className={styles.container}>Copyright; 2020 DevState</div>        
          </div>
        </body>
      </div>

    );
  }
}

export default Header ;