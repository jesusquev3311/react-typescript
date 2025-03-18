import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import subscribersProvider from "./providers/subscribers.ts";

import Subscribers from "./pages/Subscribers";
import SubscriberDetail from "./pages/SubscriberDetail";
import NotFound from "./pages/404";
import Layout from "./components/Layout/Layout";

import { Sub } from "./types.d.tsx";

import "./App.css";

function App() {
  const [subs, setsubs] = useState<Sub[]>([]);

  const onNewSub = (newSub: Sub) => {
    subscribersProvider
      .addSubscriber(newSub)
      .then(() => setsubs([...subs, newSub]))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    subscribersProvider.getSubscribers().then((subs) => setsubs(subs));
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
