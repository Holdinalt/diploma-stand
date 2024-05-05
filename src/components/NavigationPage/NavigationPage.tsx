import {Button, Container, Row} from "react-bootstrap";

export const NavigationPage = () => {
    const link = 'https://playwright.dev/';

    const navigate = (url: string, newPage = false) => {
        if(newPage){
            window.open(url, '_blank')
        }else{
            window.location.replace(url)
        }
    }

    return (
        <>
            <Container style={{width: 100, display: 'flex', flexDirection: 'column', gap: 10}}>
                <Row>
                    <Button variant="info" data-testid={'button-1'} onClick={() => navigate(link)}>Кнопка 1</Button>
                </Row>
                <Row>
                    <Button variant="info" data-testid={'button-2'} onClick={() => navigate(link, true)}>Кнопка 2</Button>
                </Row>
                <Row>
                    <a target={"_parent"} href={link} data-testid={'link-1'}>Ссылка 1</a>
                </Row>
                <Row>
                    <a target="_blank" rel="noreferrer" href={link} data-testid={'link-2'}>Ссылка 2</a>
                </Row>
            </Container>
        </>
    )
}
