// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AuthLogin from './Modules/AuthLogin/AuthLogin';
import PageLogin from './Pages/PageLogin/PageLogin';
import './App.css';

function App() {
  return (
    <div className="App">
      <PageLogin/>
    </div>

  // <BrowserRouter> 
  //     <Routes>
  //     <Route path="/" element={<PageLogin />} />
  //     </Routes> 

  // </BrowserRouter>
  );
}

export default App;
