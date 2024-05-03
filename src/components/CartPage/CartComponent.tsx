import {CardType} from "./CartPage";
import {Badge, ListGroup} from "react-bootstrap";

interface ComponentProps {
    cards: CardType[];
    deleteFunction: (card: CardType) => void
}
export const CartComponent = ({cards, deleteFunction}: ComponentProps) => {
    return (
        <>
            <h1>Cart</h1>

            <ListGroup>
                {cards.map(card => {
                    return (
                        <ListGroup.Item>
                            {`${card.name}`}
                            <Badge bg="primary" pill>
                               ${card.price}
                            </Badge>
                        </ListGroup.Item>
                    )
                })}
                <ListGroup.Item>
                    Total
                    <Badge bg="primary" pill>
                        ${cards.reduce((prev, curr) => prev + curr.price, 0)}
                    </Badge>
                </ListGroup.Item>
            </ListGroup>

            <div style={{display: "flex", flexDirection: "column", gap: 10}}>

            </div>
        </>
    )
}
