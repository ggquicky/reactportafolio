

import Navbar from './navbar/navbar';
import About from './about/about';
import Mywork from './mywork/Mywork';
import Contactme from './contactme/Contactme';


function App() {
  return (
    <div className="App">
      <Navbar/>
        <About />
        <Mywork />
        <Contactme />
    </div>
  );
}

export default App;
