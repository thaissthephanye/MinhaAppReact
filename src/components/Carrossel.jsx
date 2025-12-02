import React from 'react'
import { Container, Carousel, Image } from 'react-bootstrap';

const Carrossel = () => {
    return (
        <div>
            <Container>
                <Carousel className='carrossel'>
                    <Carousel.Item interval={1000}>
                        <Image className='imagem-carrossel d-block' src="../src/assets/crianca-aluno.jpg" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Image className='imagem-carrossel d-block' src="../src/assets/saladeAula.jpg" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Image className='imagem-carrossel' src="../src/assets/alunos-sala-aula.jpg" />
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container></Container>
        </div>
    )
}

export default Carrossel
