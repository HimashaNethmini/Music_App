//import CenterMenu from "./components/CenterMenu";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Download from "./components/Download";

function App() {
  return (
    <div className='App text-white overflow-hidden'> {/*default colour will be white*/}

      <Header/>
      <Hero/>
      <Experience/>
      <Footer />
      <Search/>
      <Download/>

    </div>
)};

export default App;
