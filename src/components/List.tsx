import { JSX } from "react";
import { Sub } from "../types.d.tsx";

interface Props {
  subs: Sub[];
}

const List = ({ subs }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map((sub, index) => {
      return (
        <li key={index}>
          <img src={sub.avatar} alt={sub.nick} />
          <p>
            {sub.nick}
            <span>
              <small> ({sub.subMonths})</small>
            </span>
          </p>

          <p>{sub.description}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
