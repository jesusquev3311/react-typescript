import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Subscribers from "./pages/Subscribers";
import SubscriberDetail from "./pages/SubscriberDetail";
import NotFound from "./pages/404";
import Layout from "./components/Layout/Layout";

import { Sub } from "./types.d.tsx";

import "./App.css";

//TODO: create a provider for the data on separate file
const data = async (): Promise<Sub[]> => {
  const response = await fetch("http://localhost:5000/subs");
  const data = await response.json();
  return data;
};

function App() {
  const [subs, setsubs] = useState<Sub[]>([]);

  const onNewSub = (newSub: Sub) => {
    setsubs([...subs, newSub]);
  };

  useEffect(() => {
    data().then((subs) => setsubs(subs));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout onNewSub={onNewSub} />}>
          <Route index element={<Subscribers subs={subs} />} />
          <Route path="/subscribers/:id" element={<SubscriberDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
