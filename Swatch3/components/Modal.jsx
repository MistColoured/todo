import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component {
  el = document.createElement('div')

  // const modalRoot = document.getElementById('modal-root')
  componentDidMount = () => {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount = () => {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
