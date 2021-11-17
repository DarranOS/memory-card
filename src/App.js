import "./App.css";
import React, { useState } from "react";
import CardDrawer from "./container/CardDrawer/CardDrawer";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [backdropIsOpen, setBackdropIsOpen] = useState(true);

  const modalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const backdropHandler = () => {
    console.log(backdropIsOpen);
    setBackdropIsOpen(!backdropIsOpen);
  };

  return (
    <div className="App">
      {modalIsOpen ? <Modal closed={modalHandler} /> : null}
      {modalIsOpen ? <Backdrop onClick={backdropHandler} /> : null}
      <CardDrawer />
    </div>
  );
}

export default App;
