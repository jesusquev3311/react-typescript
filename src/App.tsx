import { useEffect, useState } from "react";
import SubsTable from "./components/SubsTable/SubsTable.tsx";
import Form from "./components/AddSubsForm/Form";
import { Sub } from "./types.d.tsx";
import { Flex } from "@chakra-ui/react";

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
      <Flex>
        <div className="App">
          <h1>Channel's Subs</h1>
          <br />
          <SubsTable subs={subs}></SubsTable>
          <Form onNewSub={onNewSub} />
        </div>
      </Flex>
    </>
  );
}

export default App;
