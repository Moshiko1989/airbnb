import React, { Component } from 'react'

import './TransactionModal.css'

export class TransactionModal extends Component {
    closeModal = () => {
        document.querySelector('.modal').style.display = 'none';
    }
    render() {
        return (
            <div>
                <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Book this flat</p>
                    <button className="delete" onClick={this.closeModal} aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <form>
                        <input />
                        <input/>
                        <input/>
                        <input/>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Save changes</button>
                    <button className="button">Cancel</button>
                </footer>
                </div>
            </div>
            </div>
        )
    }
}