import React from 'react';
import styles from '../app/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <p>&copy by dinesh; 2023 Your Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
