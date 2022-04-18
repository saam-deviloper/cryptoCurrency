import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import Detail from "./Component/shared/Detail";
import CoinContextProvider from "./context/CoinContextProvider";
import Forum from "./Component/Forum";
import { useState } from "react";

function App() {
  //lift up state for use search input in home Comp
  const [search,setSearch] = useState('')
  return (
      <CoinContextProvider>
        <Header setSearchedValue={setSearch} />
        <Routes>
          <Route path="/" element={<Home searchedItem={search} />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </CoinContextProvider>
  );
}

export default App;
