import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import GetPlayer from './GetPlayer';

function SearchForm() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Form style={{ width: '20%' }} onSubmit={handleSubmit}>
          <div style={{padding: '1rem', paddingLeft: '4rem'}} >
        <Form.Group controlId="formBasicEmail">
        <Form.Label style={{ paddingLeft: "1rem", paddingRight: "1rem", fontWeight: 'Bold', color: "rgb(0, 255, 225)" }}>Player Name:</Form.Label>
          <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </Form.Group>
        </div>
        <div style={{paddingLeft:'7rem', paddingBottom:'2rem'}} >
        <Button style={{ fontWeight: "bold" }} className="btn-lg" variant="primary" type="submit">
        Search
        </Button>

        </div>
        {name && <GetPlayer name={name} />}
      </Form>
    </div>
  );
}

export default SearchForm;
