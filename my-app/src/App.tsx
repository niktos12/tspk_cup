import {Header} from './components/Header'
import { Lists } from './components/Lists';
import { Presentation } from './components/Presentation';
import { Footer } from './components/Footer';
import { PartIn } from './components/PartIn';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Header />
      <Presentation/>
      <Lists />
      <PartIn/>
      <Modal isOpen={false} onClose={closeModal}/>
      <Footer/>
    </>
  );
}

export default App;
