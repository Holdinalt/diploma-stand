import {Button, Container, Row} from "react-bootstrap";

export const NavigationPage = () => {
    const link = 'https://ya.ru/';

    return (
        <>
            <Container style={{width: 100, display: 'flex', flexDirection: 'column', gap: 10}}>
                <Row>
                    <Button variant="info" test-id={'button-1'}>Кнопка 1</Button>
                </Row>
                <Row>
                    <Button variant="info" test-id={'button-2'}>Кнопка 2</Button>
                </Row>
                <Row>
                    <a href={link} test-id={'link-1'}>Ссылка 1</a>
                </Row>
                <Row>
                    <a target="_blank" rel="noreferrer" href={link} test-id={'link-2'}>Ссылка 2</a>
                </Row>
            </Container>
        </>
    )
}
