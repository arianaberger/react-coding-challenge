import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';


const SearchForm = (props) => {
  console.log(props)

  return(
    <Form onSubmit={props.handleSubmit} id="searchForm">
      <Form.Row>
        <Col>
          <Form.Group controlId="searchInput">
            <Form.Control
              required
              type="text"
              name="search"
              placeholder="Search..."
              value={props.search}
              onChange={props.handleOnChange}
             />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="light" type="submit" block>
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default SearchForm
