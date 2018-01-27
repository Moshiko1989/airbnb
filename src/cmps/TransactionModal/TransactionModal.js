import React, { Component } from 'react'

import './TransactionModal.css'

export class TransactionModal extends Component {

    componentDidMount() {
        document.addEventListener('keyup', this.closeModal);
    }
    componentWillUnmount() {
        document.removeEventListener('keyup', this.closeModal);
    }
    closeModal = (e) => {
        if (!e.keyCode || e.keyCode === 27) {
            document.querySelector('.modal').style.display = 'none';
            console.log(e.keyCode)
            this.props.closeModal()
        }
    }
    onInputChange = (e) => {
        console.log(e.target.value)
    }
    render() {
        return (
            <div>
                <div className="modal">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Book this flat:</p>
                            <button className="delete" onClick={this.closeModal} aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                            <form>
                                <input onChange={this.onInputChange} type="date" />
                                <input onChange={this.onInputChange} type="date" />
                                <input onChange={this.onInputChange} type="number" />
                            </form>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success">Save changes</button>
                            <button className="button" onClick={this.closeModal}>Cancel</button>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}