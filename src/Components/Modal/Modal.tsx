import * as React from "react";
import ReactModal from "react-modal";


interface IModalProps {
  show: boolean;
}

ReactModal.setAppElement('#root');

const Modal: React.FunctionComponent<IModalProps> = ({ show, children }) => {
  return (
    <ReactModal
      isOpen={show}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,.7)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "0",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
