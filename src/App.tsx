import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Subscribers from "./pages/Subscribers";
import SubscriberDetail from "./pages/SubscriberDetail";
import NotFound from "./pages/404";
import Layout from "./components/Layout/Layout";

import { Sub } from "./types.d.tsx";

import "./App.css";

const INITIAL_STATE = [
  {
    nick: "dapelu",
    role: "vip",
    subMonths: 10,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu is sometimes a mod",
  },
  {
    nick: "ramulo",
    role: "sub",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=ramulo",
    description: "Dapelu is a sub",
  },
  {
    nick: "axel",
    role: "mod",
    subMonths: 23,
    avatar: "https://i.pravatar.cc/175?u=axel",
    description: "Dapelu is a sub",
  },
];

function App() {
  const [subs, setsubs] = useState<Sub[]>([]);

  const onNewSub = (newSub: Sub) => {
    setsubs([...subs, newSub]);
  };

  useEffect(() => {
    setsubs(INITIAL_STATE as Sub[]);
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
