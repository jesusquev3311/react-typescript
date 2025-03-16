import { JSX } from "react";
import { Table, Avatar, Flex } from "@chakra-ui/react";

import { Sub } from "../types.d";

interface Props {
  subs: Sub[];
}

const List = ({ subs }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map((sub, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>
            <Flex align={"center"}>
              <Avatar.Root size="xs" shape="full">
                <Avatar.Image src={sub.avatar} />
                <Avatar.Fallback name={sub.nick} />
              </Avatar.Root>
              @{sub.nick}
            </Flex>
          </Table.Cell>
          <Table.Cell>{sub.description}</Table.Cell>
          <Table.Cell>{sub.subMonths}</Table.Cell>
          <Table.Cell textAlign="end">TODO: actions</Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    <Table.Root variant={"outline"} data-testid="subs-list">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Subscriber</Table.ColumnHeader>
          <Table.ColumnHeader>Description</Table.ColumnHeader>
          <Table.ColumnHeader>Subscription Months</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Actions</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>{renderList()}</Table.Body>
    </Table.Root>
  );
};

export default List;
