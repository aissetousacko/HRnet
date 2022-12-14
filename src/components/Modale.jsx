import React from 'react'

const Modale = ({ open, isOpen, message }) => {
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

export default Modale
