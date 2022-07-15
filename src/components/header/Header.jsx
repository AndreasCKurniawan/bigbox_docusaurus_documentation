import React from 'react';
import styles from './style.module.css';
import {Container} from '@mui/system';

function CompHeader() {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.itemsContainer}>
          <div className={styles.sideOne}>
            <img src="img/logo.png" alt="" width={102} height={37} />
          </div>
          <div className={styles.sideTwo}>
            <div className={styles.navContainer}>
              <span className={styles.navText}>Why Bigbox</span>
            </div>
            <div className={styles.navContainer}>
              <span className={styles.navText}>Solutions</span>
            </div>
            <div className={styles.navContainer}>
              <span className={styles.navText}>Products</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CompHeader;
