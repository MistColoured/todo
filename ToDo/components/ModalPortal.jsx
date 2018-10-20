import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ModalPortal extends Component {
  el = document.createElement('div')

  modalRoot = document.getElementById('modal-root');

  componentDidMount = () => {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount = () => {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    // eslint-disable-next-line
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
