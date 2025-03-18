import { Outlet } from "react-router-dom";

import { Container } from "@chakra-ui/react";
import { Sub } from "../../types";

import Navbar from "../NavBar/NavBar";
import Modal from "../Modal/Modal";
import Form from "../AddSubsForm/Form";
import { JSX } from "@emotion/react/jsx-runtime";

const LINKS = [{ text: "Subscribers", link: "/" }];

interface LayoutProps {
  onNewSub: (newSub: Sub) => void;
}

const Layout = ({ onNewSub }: LayoutProps) => {
  const addSubModal = (): JSX.Element => {
    return (
      <Modal
        title="Add new subscriber"
        btnText="Add new subscriber"
        cancelBtnText="Cancel"
        actionBtnText="Save"
      >
        <Form onNewSub={onNewSub} />
      </Modal>
    );
  };
  return (
    <>
      <Navbar items={LINKS} rigth={addSubModal()}></Navbar>

      <main>
        <Container fluid>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
