import '../textInputBox.css';
import Form from 'react-bootstrap/Form';

function TextInputBox() {
  return (
    <div>
      <div id="chatBox">
        <Form>
          <Form.Group>
            <Form.Control
              id="formChatBox"
              type="text"
              placeholder="Send Message..."
            />
            <Form.Text className="text-muted">
              Press "Send" to send a message
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default TextInputBox;
