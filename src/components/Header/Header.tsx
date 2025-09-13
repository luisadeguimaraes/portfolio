// Header.tsx
import React from 'react';
import ThemeToggle from './ThemeToggle';

// This is the key part of CSS Modules.
// 'styles' becomes an object mapping class names to unique strings.
import styles from './Header.module.css';

// You can define props here if the header needs any (e.g., nav links)
interface HeaderProps {
  // Add any props your component needs
}

const Header: React.FC<HeaderProps> = () => {
  return (
    // Instead of class="header", you use className={styles.header}
    <header className={styles.header}>
      <div className={styles.content}>
        {/* Your content like a logo or navigation goes here */}
        <div></div>
        <ThemeToggle/>
      </div>
    </header>
  );
};

export default Header;


