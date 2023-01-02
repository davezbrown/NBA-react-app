import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar'
import SearchForm from './SearchForm';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    background: {
        backgroundColor: `black`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Navbar />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1 style={{ textAlign: 'center', paddingTop: '2rem', color: "rgb(0, 255, 225)" }}>Player Search</h1>
            <SearchForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
