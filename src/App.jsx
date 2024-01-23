import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Hero from 'sections/Hero/Hero';
import Section1 from 'sections/Section1/Section1';
import Section2 from 'sections/Section2/Section2';
import Section4 from 'sections/Section4/Section4';
// import styles from './App.module.scss'


export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section4 />
      <Footer />
    </>
  );
};
