import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const MessageList = ({ messageList }) => (

  <div>{
        messageList.map(message => (
          <Message
            key={message.id}
            message={message.message}
          />
        ))
      }
  </div>

);

MessageList.propTypes = {
  messageList: PropTypes.arrayOf(Object),
};

MessageList.defaultProps = {
  messageList: [{}],
};

export default MessageList;
