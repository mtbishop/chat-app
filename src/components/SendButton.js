import '../sendbutton.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const SendButton = () => {
  return (
    <div>
      <Button variant="outline-primary" value="Send" type="submit">
        Send
      </Button>
    </div>
  );
};

export default SendButton;
