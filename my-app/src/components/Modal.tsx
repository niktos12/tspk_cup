import React, { useState } from 'react'

interface ModalProps{
  isOpen: boolean;
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose,}) => {

  const [open, setOpen] = useState(true)
  const handleOpen = () => {
    setOpen(false)
  }

  return (
    <>
    
    {open && 
      
      <div className='z-30 absolute fixed bg-black/50 top-0 right-0 left-0 bottom-0'>
      <div
        className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2"
      >
        <h1 className="text-2xl text-center mb-2"></h1>
        <button onClick={handleOpen}>Закрыть</button>
      </div>
      </div>
    }

    </>
  )
}

export default Modal;