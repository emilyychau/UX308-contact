import styles from 'bulma/css/bulma.min.css?inline';
import { Form, Icon, Button } from 'react-bulma-components';

export function SubscriberForm() {
    return <form onSubmit={event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
    }}>

      <Form.Field>
        <Form.Label>Full Name</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            colorVariant="light"
            name="name"
            placeholder="First Name      Last Name"
          />
        </Form.Control>
      </Form.Field>

      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Control>
          <Form.Input
            name="email"
            placeholder="example@mail.com"
            colorVariant="light"
          />
          <Icon align="left" size="small">
            <i className="fas fa-envelope" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-exclamation-triangle" />
          </Icon>
        </Form.Control>
        <Form.Help color="danger" colorVariant="light">A valid email address is required</Form.Help>
      </Form.Field>

      <Form.Field>
        <Form.Label>Subject</Form.Label>
        <Form.Field kind="group">
          <Form.Control>
            <Form.Select
              name="subject" colorVariant="light"
            >
              <option placeholder="Message Subject">Message Subject</option>
              <option value="menu-questions">Menu Questions</option>
              <option value="complaints">Complaints or Concerns</option>
              <option value="positive-feedback">Positive Feedback</option>
              <option value="large-order">Large order</option>
              <option value="catering">Catering</option>
              <option value="catering">Franchising Inquiry</option>
              <option value="other-comments">Other Comments</option>
            </Form.Select>
          </Form.Control>
          <Form.Control fullwidth loading>
            <Form.Input placeholder="Subject Line (optional)" colorVariant="light"/>
          </Form.Control>
        </Form.Field>
      </Form.Field>
      
      <Form.Field>
        <Form.Control>
          <Form.Textarea placeholder="Type your message here" colorVariant="light"/>
        </Form.Control>
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

      <style>{styles}</style>

    </form>
}