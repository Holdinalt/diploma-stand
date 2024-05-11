import {useState} from "react";
import {Button} from "react-bootstrap";
import {ModalComponent} from "./Modal/ModalComponent";

function makeRandomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export const ModalPage = () => {
    const [randomString] = useState(makeRandomString(100))

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleClose = () => setIsModalVisible(false)
    const handleOpen = () => setIsModalVisible(true)

    const isFlexBackground = 'true' === (new URLSearchParams(window.location.search)).get('flex')

    return (
        <div className={'modal-wrap'}>
            <Button variant="primary" onClick={handleOpen} data-testid={'modal-open'}>
                Launch demo modal
            </Button>

            {isFlexBackground &&
                <div className={'flex-text'}>
                    {randomString}
                </div>
            }

            <ModalComponent isVisible={isModalVisible} onClose={handleClose} />
        </div>
    )
}
