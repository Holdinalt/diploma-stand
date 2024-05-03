import {useCallback, useState} from "react";
import {CardsComponent} from "./CardsComponent";
import {CartComponent} from "./CartComponent";
import {Button} from "react-bootstrap";


export const CartPage = () => {
    const INITIAL_CARDS: CardType[] = [
        {
            name: 'Keyboard',
            price: 100,
            id: 1,
        },
        {
            name: 'Mouse',
            price: 50,
            id: 2,
        }
    ]

    const [cards, setCards] = useState<CardType[]>(INITIAL_CARDS);
    const [isCardsPage, setIsCardsPage] = useState(true);
    
    const addToCart = useCallback(
        (card: CardType) => {
            setCards([...cards, card])
        },
        [cards],
    );

    const deleteFromCart = useCallback(
        (card: CardType) => {
            setCards(cards.filter(elem => elem.id !== card.id))
        },
        [cards],
    );
    

    return (
        <>
            <div style={{display: "flex", flexDirection: "row", gap: 20, marginBottom: 100}}>
                <Button onClick={() => setIsCardsPage(true)}>Cards</Button>
                <Button onClick={() => setIsCardsPage(false)}>Cart</Button>
            </div>

            {isCardsPage
                ? <CardsComponent cards={cards} addFunction={addToCart}/>
                : <CartComponent cards={cards} deleteFunction={deleteFromCart}/>}
        </>
    )
}

export type CardType = {
    name: string,
    price: number,
    id: number,
}
