
import './App.css';
import image from './image/tree.png';
import forest from './image/forest.png';
import google from './image/google.png';
import facebook from "./image/facebook.png";
import { FloatingLabel, Form, Button,Card } from "react-bootstrap";
import Date from './Date';
import Video from './Video';
function App() {
  return (
    <div className="App">
      <div className="forest">
        <img src={forest} style={{width:'100%'}}></img>   
      </div>
      <div style={{ marginTop: 10 }}>
        <Card className="tree mt-4">
          <h1 className="login-font">Login</h1>
          <img src={image}></img>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 mt-3 email"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="email"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <div className="d-grid gap-2 mt-3">
            <Button className="button-custom" size="lg">
              Sign In
            </Button>
          </div>
          <div>
            <text className="text-password mt-2">forgot password ?</text>
            <text className="text-signup mt-2">New User? Sign Up</text>
          </div>
          <div className="d-grid gap-2 mt-5">
            <Button size="md">
              <img className="icons" src={google}></img>
              CONTINUE WITH GOOGLE
            </Button>
          </div>
          <div className="d-grid gap-2 mt-2">
            <Button size="md">
              <img className="icons" src={facebook}></img>
              CONTINUE WITH FACEBOOK
            </Button>
          </div>
          <Date></Date>
          <Video></Video>
        </Card>
      </div>
    </div>
  );
}

export default App;
