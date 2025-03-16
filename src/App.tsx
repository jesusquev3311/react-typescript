import { useEffect, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types.d.tsx";
import { Flex } from "@chakra-ui/react";

import "./App.css";

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu is sometimes a mod",
  },
  {
    nick: "ramulo",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=ramulo",
    description: "Dapelu is a sub",
  },
];

function App() {
  const [subs, setsubs] = useState<Sub[]>([]);

  const onNewSub = (newSub: Sub) => {
    setsubs([...subs, newSub]);
  };

  useEffect(() => {
    setsubs(INITIAL_STATE);
  }, []);

  return (
    <>
      <Flex>
        <div className="App">
          <h1>Channel's Subs</h1>
          <br />
          <List subs={subs}></List>
          <Form onNewSub={onNewSub} />
        </div>
      </Flex>
    </>
  );
}

export default App;
