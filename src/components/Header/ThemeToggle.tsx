// File: /components/Header/ThemeToggle.tsx

import { useTheme } from "../../context/ThemeContext"; // Using your exact import path
import { C3POIcon } from "../Icons/C3POIcon";
import { DarkC3POIcon } from "../Icons/DarkC3POIcon";
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  // It's often cleaner to create a boolean for the current state
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleButton} // This is the 65x87 container
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* 1. Wrap the icon in the container that positions it at the top */}
      <div className={styles.iconContainer}>
        {isDark ? <DarkC3POIcon /> : <C3POIcon />}
      </div>
      
      {/* 2. Conditionally render the caption, which is positioned at the bottom */}
      {isDark && (
        <span className={styles.caption}>
          Oh dear!
        </span>
      )}
    </button>
  );
}