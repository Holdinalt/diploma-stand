import {CardType} from "./CartPage";
import {Badge, ListGroup} from "react-bootstrap";

interface ComponentProps {
    cards: CardType[];
    deleteFunction: (card: CardType) => void
}
export const CartComponent = ({cards}: ComponentProps) => {
    return (
        <>
            <h1>Cart</h1>

            <ListGroup data-testid={'cart-list'}>
                {cards.map(card => {
                    return (
                        // @ts-ignore
                        <ListGroup.Item name={'cart-item'}>
                            {`${card.name}`}
                            <Badge bg="primary" pill>
                               ${card.price}
                            </Badge>
                        </ListGroup.Item>
                    )
                })}
                <ListGroup.Item data-testid={'cart-total'}>
                    Total
                    <Badge bg="primary" pill data-testid={'cart-total-number'}>
                        ${cards.reduce((prev, curr) => prev + curr.price, 0)}
                    </Badge>
                </ListGroup.Item>
            </ListGroup>

            <div style={{display: "flex", flexDirection: "column", gap: 10}}>

            </div>
        </>
    )
}
