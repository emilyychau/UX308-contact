import 'bulma/css/bulma.min.css';
import { Form, Icon, Button } from 'react-bulma-components';

export function SubscriberForm() {
    return <form onSubmit={event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
    }}>
      <Form.Field>
        <Form.Label>Username</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            name="username"
          />
          <Icon align="left" size="small">
            <i className="fas fa-user" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-check" />
          </Icon>
        </Form.Control>
        <Form.Help color="success">This username is available</Form.Help>
      </Form.Field>

      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Control>
          <Form.Input
            color="danger"
            name="email"
          />
          <Icon align="left" size="small">
            <i className="fas fa-envelope" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-exclamation-triangle" />
          </Icon>
        </Form.Control>
        <Form.Help color="danger">This email is invalid</Form.Help>
      </Form.Field>

      <Form.Field>
        <Form.Label>Subject</Form.Label>
        <Form.Field kind="group">
          <Form.Control>
            <Form.Select
              name="subject"
            >
              <option value="select-dropdown">Select dropdown</option>
              <option value="with-options">With options</option>
            </Form.Select>
          </Form.Control>
          <Form.Control fullwidth loading>
            <Form.Input placeholder="With loading state" />
          </Form.Control>
        </Form.Field>
      </Form.Field>

      <Form.Field kind="group">
        <Form.Control>
          <Button color="link">Submit</Button>
        </Form.Control>
        <Form.Control>
          <Button color="link" colorVariant="light">
            Cancel
          </Button>
        </Form.Control>
      </Form.Field>

    </form>
}