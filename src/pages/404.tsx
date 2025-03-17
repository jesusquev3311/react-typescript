import { EmptyState, List, VStack } from "@chakra-ui/react";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <EmptyState.Root size="lg">
      <EmptyState.Content>
        <EmptyState.Indicator>
          <TbError404 />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>No results found</EmptyState.Title>
          <EmptyState.Description>
            Try adjusting your search
          </EmptyState.Description>
        </VStack>
        <List.Root variant="marker">
          <List.Item>Try removing filters</List.Item>
          <List.Item>Try different keywords</List.Item>
        </List.Root>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

export default NotFound;
