import React from 'react'

/**
 * display the modal dialog
 * @param {Boolean} open
 * @param {Function} isOpen
 * @param {String} message
 * @returns {JSX.Element} Modal Component
 */
const Modal = ({ open, isOpen, message }) => {
  if (open) {
    return (
      <div className="modale">
        <div className="modale__content">
          <div className="close" onClick={() => isOpen(!open)}></div>
          {message}
        </div>
      </div>
    )
  }
}

export default Modal
