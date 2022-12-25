import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import { prevEventData } from '../constants/index';

const PrevEvents = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        const event = prevEventData.filter(item => item.id === id);
        setTitle(event[0].title);
        setDescription(event[0].description);
        setImgUrl(event[0].imgUrl);
    }, []);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <section className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="skill-bx">
                            <h2>{title}</h2>
                            <p>{description}</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={imgUrl} alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PrevEvents