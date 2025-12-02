import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
import instituicoesDeEnsino from '../dataset/top3CensoEscolar.json';
import './Cards.css';

const Cards = () => {
    const top3 = [...instituicoesDeEnsino].sort((a, b) => b.total_matriculas - a.total_matriculas).slice(0, 3);

    return (
        <div>
            <Container>
                <Row>
                    <div className='cards-container'>
                        {top3.map((instituicao, index) => (
                            <Card key={index} className='card'>
                                <Card.Body>
                                    <Card.Title className='card-titulo'>{instituicao.no_entidade}</Card.Title>
                                    <Card.Text>
                                        <p><strong>Município:</strong> {instituicao.no_municipio}</p>
                                        <p><strong>UF:</strong> {instituicao.sg_uf}</p>
                                        <p><strong>Total de Matrículas:</strong> {instituicao.total_matriculas}</p>
                                    </Card.Text>
                                    <Badge bg="info" className='badge-card'>Top {index + 1}</Badge>
                                </Card.Body>
                            </Card>
                        ))}

                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Cards
