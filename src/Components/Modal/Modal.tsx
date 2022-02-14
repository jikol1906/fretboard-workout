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
          display: 'flex',

        },
        content: {
          position: 'static',
          margin:'auto',
          padding: "0",
          maxHeight:'100vh',
          overflowY:'auto'
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
