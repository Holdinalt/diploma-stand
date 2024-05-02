import {useState} from "react";
import {Button} from "react-bootstrap";
import {ModalComponent} from "./Modal/ModalComponent";

export const ModalPage = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleClose = () => setIsModalVisible(false)
    const handleOpen = () => setIsModalVisible(true)

    return (
        <>
            <Button variant="primary" onClick={handleOpen}>
                Launch demo modal
            </Button>

            <ModalComponent isVisible={isModalVisible} onClose={handleClose} />
        </>
    )
}
