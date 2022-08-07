import styles from "./Modal.module.css";

const Modal = ({ title, message, setShow, onSubmit }) => {
  return (
    <div
      onClick={() => {
        setShow(false);
        onSubmit(true);
      }}
      className={styles.modalContainerOuter}
    >
      <div className={styles.modalContainer}>
        <h2 className={styles.modalTitleStyle}>{title}</h2>
        <p className={styles.modalMessageStyle}>{message}</p>
        <button
          onClick={() => {
            setShow(false);
            onSubmit(true);
          }}
          className={styles.modalBntStyles}
        >
          تایید
        </button>
      </div>
    </div>
  );
};

export default Modal;
