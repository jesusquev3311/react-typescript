import { Sub } from "../types.d";

import SubsTable from "../components/SubsTable/SubsTable";

interface SubscribersProps {
  subs: Sub[];
}

const Subscribers = ({ subs }: SubscribersProps) => {
  return (
    <div>
      <h1>Subscribers</h1>
      <SubsTable subs={subs} />
    </div>
  );
};

export default Subscribers;
