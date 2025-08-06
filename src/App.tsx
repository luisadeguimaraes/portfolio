import Hero from './components/sections/Hero/Hero';
import ThemeToggle from './components/sections/Hero/layout/ThemeToggle';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { theme } = useTheme(); // optional if you want to show current theme

  return (
    <>
      <ThemeToggle />
      <Hero />
    </>
  );
}
