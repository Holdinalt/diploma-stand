import {Button, Card} from "react-bootstrap";
import {CardType} from "./CartPage";

interface ComponentProps {
   cards: CardType[];
   addFunction: (card: CardType) => void
}

export const CardsComponent = ({
    cards
}: ComponentProps) => {
    return (
        <>
            <h1>Cards</h1>

            <div>
                {cards.map(card => {
                    return (<Card style={{width: '18rem'}}>
                        <Card.Img variant="top"/>
                        <Card.Body>
                            <Card.Title>{card.name}</Card.Title>
                            <Card.Text>
                                {`price: ${card.price}$`}
                            </Card.Text>
                            <Button variant="primary">Add To Card</Button>
                        </Card.Body>
                    </Card>)
                })}

            </div>


        </>
    )
}
