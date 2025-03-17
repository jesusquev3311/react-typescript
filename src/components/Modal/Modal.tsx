"use client";

import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { useState } from "react";

interface ModalProps {
  title: string;
  btnText: string;
  cancelBtnText: string;
  actionBtnText: string;
  children: React.ReactNode;
  hasFooter?: boolean;
}

const Modal = ({
  title,
  btnText,
  children,
  cancelBtnText,
  actionBtnText,
  hasFooter,
}: ModalProps) => {
  const [open, setOpen] = useState(false);

  const footer = (showFooter: ModalProps["hasFooter"]) => {
    return (
      showFooter && (
        <Dialog.Footer>
          <Dialog.ActionTrigger asChild>
            <Button variant="outline">{cancelBtnText || "cancel"}</Button>
          </Dialog.ActionTrigger>
          <Button>{actionBtnText || "save"}</Button>
        </Dialog.Footer>
      )
    );
  };
  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <Button colorScheme="teal" variant="solid">
          {btnText || "Open"}
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>{children}</Dialog.Body>
            {footer(hasFooter)}
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Modal;
