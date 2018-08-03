import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Lalastudio_About from './lalastudio_about';
import '../indiv_page.css';

export default class Lalastudio_Header extends React.Component {
    state = {
      open: false
    };
  
    onOpenModal = () => {
      this.setState({ open: true });
    };
  
    onCloseModal = () => {
      this.setState({ open: false });
    };
  
    render() {
      const { open } = this.state;
      return (
        <div className="example">
            lalastudio
            <table className="menu_Box">
                <tr>
                    <td>
                        <button className="btn" onClick={this.onOpenModal}>
                            About
                        </button>
                        <Modal open={open} onClose={this.onCloseModal}>
                            {Lalastudio_About()}
                        </Modal>
                    </td>
                    <td>
                        <button className="btn" onClick={this.onOpenModal}>
                            Order
                        </button>
                        <Modal open={open} onClose={this.onCloseModal}>
                            {Lalastudio_About()}
                        </Modal>
                    </td>
                </tr>
            </table>
        </div>
      );
    }
  }

