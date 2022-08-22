import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "../components/Navbar";

function SignUp() {
  return (
    <div className="form">
      <Navbar />
      <Form className="formWrapper">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: 600, marginBottom: 4 }}>
            Username
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: 600, marginBottom: 4 }}>
            Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: 600, marginBottom: 4 }}>
            Confirm Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I have read and agree to the terms and conditions."
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
