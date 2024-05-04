import {Carousel} from "react-bootstrap";


function ExampleCarouselImage({ text, color }: {text: string, color: string}) {
    return (
        <div style={{width: 800, height: 400, display:"flex", justifyContent: "center", alignItems: "center", backgroundColor: color}}>
            {text}
        </div>
    );
}

export const CarouselPage = () => {

    return (
        <Carousel data-bs-theme="dark" style={{width: 800, height: 400}}>
            <Carousel.Item data-testid={'carousel-item-1'}>
                <ExampleCarouselImage color={'#DAA520'} text={'1 slide'}/>
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item data-testid={'carousel-item-2'}>
                <ExampleCarouselImage color={'#6495ED'} text={'2 slide'}/>
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item data-testid={'carousel-item-3'}>
                <ExampleCarouselImage color={'#ADFF2F'} text={'3 slide'}/>
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
