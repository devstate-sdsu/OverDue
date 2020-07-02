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
          <div className={styles.footere}>
            <div className={styles.container}>Copyright; 2020 DevState</div>        
          </div>
          <h1>Welcome to</h1>

          <main>
            <input type="checkbox" id="theme">
              </input>
            <label for="theme">Another One?</label>
            <a href="http://localhost:3000/" target="_blank" class="btn-DevState">
              <div class="btn-DevState-pieces"></div>
              <span>DevState</span>
            </a>
          </main>
        </body>
      </div>

    );
  }
}
          

export default Header ;