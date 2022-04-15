import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'
import { ReactComponent as CloseIcone } from './close.svg'

export const Modal = ({
  title,
  width,
  onClose,
  modalContent,
  footerContent,
  isOpen,
  openCloseModal
}) => {
  const modal = (
    <div className={styles.modal_overlay}>
      <section
        className={styles.modal}
        style={{ width: width ? width : '400px' }}
      >
        <header className={styles.modal__header}>
          <h3>{title}</h3>
          <button
            className={styles.modal__close}
            onClick={() => onClose(isOpen ? 0 : 1)}
            aria-label='Close'
          >
            <CloseIcone />
          </button>
        </header>
        <main className={styles.modal__body}>{modalContent}</main>
        {footerContent ? (
          <footer className={styles.modal__footer}>{footerContent}</footer>
        ) : (
          ''
        )}
      </section>
    </div>
  )
  return isOpen ? ReactDOM.createPortal(modal, document.body) : null
}
