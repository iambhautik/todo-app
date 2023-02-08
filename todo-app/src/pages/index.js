import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Outlet, useNavigate } from 'react-router-dom';

const EntryPoint = () => {
    const navigate = useNavigate()
  return (
    <Container>
        <Button onClick={() => navigate('add-todos')} >Add Todo</Button>
        <Outlet />
    </Container>
  )
}

export default EntryPoint
