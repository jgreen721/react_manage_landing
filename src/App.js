import React, { useState } from "react";
import "./App.css";
import {
  Header,
  MiddleRow,
  MobileMenu,
  Footer,
  SimplifyCard,
  Testimonials,
} from "./components";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="app">
      <div className="header">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <MobileMenu setShowMenu={setShowMenu} showMenu={showMenu} />
        <MiddleRow />
        <Testimonials />
        <SimplifyCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
