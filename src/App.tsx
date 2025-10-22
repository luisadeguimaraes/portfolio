import Hero from './components/sections/Hero/Hero';
import Header from './components/Header/Header';
import { useTheme } from './context/ThemeContext';
import SelectedWork from './components/SelectedWork/SelectedWork';
import MeForReal from './components/sections/MeForReal/MeForReal';
import Thanks from './components/sections/Thanks/Thanks';
import Footer from './components/sections/Footer/Footer';
import Contact from './components/sections/Contact/Contact';
import Expertise from './components/sections/Pills/Expertise';

export default function App() {
  const { theme } = useTheme(); // optional if you want to show current theme

  return (
    <>
    <Header/>
      <Hero />
      <Contact/>
      <Expertise/>
      <SelectedWork/>
      <MeForReal/>
      <Thanks/>
      <Contact/>
      <Footer/>
    </>
  );
}
