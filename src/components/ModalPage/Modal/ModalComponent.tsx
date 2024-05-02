import {Button, Modal} from "react-bootstrap";

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
}

export const ModalComponent = ({
    isVisible,
    onClose
                      }: ModalProps) => {

    if(isVisible){
        return (
            <Modal show={isVisible} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return <div></div>
}
