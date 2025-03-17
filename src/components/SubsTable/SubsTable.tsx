import { JSX } from "react";
import {
  Table,
  Avatar,
  Flex,
  Badge,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { Sub } from "../../types";

import "./SubsTable.css";

interface Props {
  subs: Sub[];
}

const BADGES_COLORS = {
  vip: "red",
  mod: "purple",
  sub: "green",
};

//TODO: Implement Actions component as a separate component
const Actions = () => {
  return (
    <ButtonGroup size="sm">
      <IconButton variant={"ghost"} aria-label="Edit sub">
        <FaRegEdit />
      </IconButton>
      <IconButton variant={"ghost"} aria-label="Delete sub">
        <MdDelete />
      </IconButton>
    </ButtonGroup>
  );
};

const SubsTable = ({ subs }: Props) => {
  //TODO: Implement renderList function as a separate component
  const renderList = (): JSX.Element[] => {
    return subs.map((sub, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>
            <Flex align={"center"}>
              <Avatar.Root size="xs" shape="full" mr={3}>
                <Avatar.Image src={sub.avatar} />
                <Avatar.Fallback name={sub.nick} />
              </Avatar.Root>
              @{sub.nick}
            </Flex>
          </Table.Cell>
          <Table.Cell>
            <Badge
              colorPalette={BADGES_COLORS[sub.role]}
              variant={"surface"}
              size="md"
            >
              {sub.role}
            </Badge>
          </Table.Cell>
          <Table.Cell>{sub.description}</Table.Cell>
          <Table.Cell textAlign="center">{sub.subMonths}</Table.Cell>
          <Table.Cell textAlign="end">
            <Actions />
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    <Table.Root
      className="subs-table"
      variant={"line"}
      data-testid="subs-table"
      interactive
    >
      <Table.Header className="subs-table-header">
        <Table.Row className="subs-table-header-row">
          <Table.ColumnHeader>Subscriber</Table.ColumnHeader>
          <Table.ColumnHeader>Role</Table.ColumnHeader>
          <Table.ColumnHeader>Description</Table.ColumnHeader>
          <Table.ColumnHeader>Subscription Months</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Actions</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body className="subs-table-body">{renderList()}</Table.Body>
    </Table.Root>
  );
};

export default SubsTable;
