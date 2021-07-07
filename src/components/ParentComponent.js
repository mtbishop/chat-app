import React from 'react';
import TextInputBox from './TextInputBox';
import SendButton from './SendButton';

function ParentComponent() {
  return (
    <div>
      <TextInputBox />
      <SendButton />
    </div>
  );
}

export default ParentComponent;
