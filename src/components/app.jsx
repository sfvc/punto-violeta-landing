import React, { useEffect, useState, useRef } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Home from "./pages/home";
import Novedades from "./pages/novedades";
import Mailer from "./pages/mailer";
import FooterSection from "./pages/footerSection";
import Header from "./common/header";
import Footer from "./common/footer";
import QueEs from "./pages/queEs";

const Fullpage = () => (
  <ReactFullpage
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={500}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
            <QueEs/>
            <Home/>
            <Novedades/>
            <Mailer/>
            <FooterSection/>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export const App = () => {

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          display: "block",
          zIndex: 0,
        }}
        className="BGINICIO"
      ></div>
      <div className="navfooter">
        <Header />
        <Footer />
      </div>
      <Fullpage />
    </>
  );
};

export default App;
