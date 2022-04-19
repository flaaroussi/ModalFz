import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import styles from './styles.module.css'
import { ReactComponent as CloseIcone } from './close.svg'

/**
 * @description Modal
 *
 * @param   {string}         props.title [title of message]
 * @param   {width}          props.width [width of modal]
 * @param   {onClose}        props.onClose [close modal]
 * @param   {modalContent}   props.modalContent [body of message]
 * @param   {footerContent}  props.footerContent [ footer of message]
 * @param   {isOpen}         props.isOpen [etat of modal]
 *
 * @returns {Reactnode}  jsx injected in DOM
 */
export const Modal = ({
  title,
  width,
  onClose,
  modalContent,
  footerContent,
  isOpen
}) => {
  // escape to close modal
  const doCloseModal = (event) => {
    if (event.keyCode === 27 && isOpen) {
      onClose(isOpen ? 0 : 1)
    }
  }
  /**
   * attache event keyDown à la DOM à chaque ouverture du modal
   */

  useEffect(() => {
    document.addEventListener('keydown', doCloseModal, false)
    return () => {
      document.removeEventListener('keydown', doCloseModal, false)
    }
  }, [isOpen])

  const modalWidth = width || '400px'

  const modal = (
    <div className={styles.modal_overlay}>
      <section className={styles.modal} style={{ width: modalWidth }}>
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

/**
 * Modal Proptypes
 */

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  modalContent: PropTypes.object.isRequired,
  footerContent: PropTypes.object,
  isOpen: PropTypes.number.isRequired
}
