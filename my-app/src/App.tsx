import {Header} from './components/Header'
import { Lists } from './components/Lists';
import { Presentation } from './components/Presentation';
import { Footer } from './components/Footer';
import { PartIn } from './components/PartIn';
import { useContext } from 'react';
import { Modal } from './components/Modal';
import { ModalProvider } from './context/ModalContext';


function App() {
  return (
    <>
    <ModalProvider>
      <Header />
      <Presentation/>
      <Lists />
      <Modal/>
      <PartIn/>
      <Footer/>
    </ModalProvider>
      
    </>
  );
}

export default App;
