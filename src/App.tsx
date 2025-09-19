import Hero from './components/sections/Hero/Hero';
import Header from './components/Header/Header';
import { useTheme } from './context/ThemeContext';
import SelectedWork from './components/SelectedWork/SelectedWork';
import Expertise from './components/sections/Expertise/Expertise';

export default function App() {
  const { theme } = useTheme(); // optional if you want to show current theme

  return (
    <>
    <Header/>
      <Hero />
      <Expertise/>
      <SelectedWork/>
    </>
  );
}
