import { createPortal } from "react-dom";
import { ModalBackground, ModalContainer } from "./styled";

function Modal({ children, show }) {
  const modalRoot = <ModalContainer>{children}</ModalContainer>;

  return (
    show && (
      <>
        {createPortal(<ModalBackground />, document.body)}
        {createPortal(modalRoot, document.body)}
      </>
    )
  );
}

export default Modal;
