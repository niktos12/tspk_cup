import {Header} from './components/Header'
import { Lists } from './components/Lists';
import { Presentation } from './components/Presentation';
import { Footer } from './components/Footer';
import { PartIn } from './components/PartIn';
import  Modal  from './components/Modal';
import { ModalProvider } from './context/ModalContext';
import {Fade} from 'react-awesome-reveal';

function App() {
  
  return (
    <>
    <ModalProvider>
      <Header />
      <Presentation/>
      <Fade duration={1500} triggerOnce>
        <Lists/>
        <PartIn/>
      </Fade>
      <Modal/>
      <Footer/>
    </ModalProvider>
      
    </>
  );
}

export default App;
