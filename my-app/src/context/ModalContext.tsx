import { createContext, useState , useContext , ReactNode } from "react";
import Modal from "../components/Modal";

interface ModalContextProps {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

interface ModalProvideProps {
    children: React.ReactNode;
}

const ModalProvider: React.FC<ModalProvideProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.classList.add('no-scroll');
    }
    const closeModal = () => {
        setIsOpen(false);
        document.body.classList.remove('no-scroll');
    }

    return(
        <ModalContext.Provider value={{isOpen, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}

const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if(!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
} 

export {ModalProvider, useModal};


