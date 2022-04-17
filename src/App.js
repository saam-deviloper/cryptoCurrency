import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import Detail from "./Component/shared/Detail";
import CoinContextProvider from "./context/CoinContextProvider";

function App() {
  return (
      <CoinContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </CoinContextProvider>
  );
}

export default App;
