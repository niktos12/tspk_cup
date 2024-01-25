import {Header} from './components/Header'
import { Lists } from './components/Lists';
import { Presentation } from './components/Presentationt';
import { Footer } from './components/Footer';
import { PartIn } from './components/PartIn';

function App() {
  return (
    <>
      <Header />
      <Presentation/>
      <Lists />
      <PartIn/>
      <Footer/>
    </>
  );
}

export default App;
