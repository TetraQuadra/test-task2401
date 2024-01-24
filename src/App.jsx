import { appContext } from 'AppContextProvider';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import SideMenu from 'components/SideMenu/SideMenu';
import { useContext, useEffect } from 'react';
import Hero from 'sections/Hero/Hero';
import Section1 from 'sections/Section1/Section1';
import Section2 from 'sections/Section2/Section2';
import Section3 from 'sections/Section3/Section3';
import Section4 from 'sections/Section4/Section4';
// import styles from './App.module.scss'


export const App = () => {
  const { isSideMenuOpen } = useContext(appContext)

  useEffect(() => {

    // const handleTabClose = event => {
    //   event.preventDefault();
    // };
    // window.addEventListener('beforeunload', handleTabClose, { capture: true });
    // return () => {
    //   window.removeEventListener('beforeunload', handleTabClose);
    // };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      {
        isSideMenuOpen && <SideMenu />
      }
    </>
  );
};
