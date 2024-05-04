import {Button, Modal} from "react-bootstrap";
import "./modal-styles.css"

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
            <Modal show={isVisible} onHide={onClose} data-testid={'modal'} style={{padding: 20}}>
                <Modal.Header closeButton>
                    <Modal.Title data-testid={'modal-title'}>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body data-testid={'modal-body'}>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose} data-testid={'modal-close'}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onClose} data-testid={'modal-accept'}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return <div></div>
}
