import Head from 'next/head';
import Navbar from './components/Navbar/index';
import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import Footer from './components/Footer/index';



const Home = () => {
  return (
    <>
      <Head>
        <title>TechDNA.Com - Division of Agroha Tech ventures Pvt. Ltd., India </title>
        <meta name="description" content="We bring ideas to life to make your digital life easier." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Banner />
        <Aboutus />
        <Dedicated />
        <Digital />
        <Beliefs />
         {/* <Wework />*/}
         {/* <Ourteam />*/}
         {/* <Featured />*/}
         {/* <Manage />*/}
         {/* <FAQ />*/}
         {/* <Testimonials />*/}
        {/* <Articles />*/}
        {/*  <Joinus />*/}
       {/*<Insta />*/}
        <Footer />
      </main>
    </>
  )
}

export default Home;
