import React, { Component } from 'react'

import './TransactionModal.css'

export class TransactionModal extends Component {
    state = {};


    componentDidMount() {
        document.addEventListener('keyup', this.closeModal);
    }
    componentWillUnmount() {
        document.removeEventListener('keyup', this.closeModal);
    }
    closeModal = (e) => {
        if (!e.keyCode || e.keyCode === 27) {
            document.querySelector('.modal').style.display = 'none';
            this.props.closeModal();
        }
    }

    onInputChange = (field) => {
        return (e) => {
            if (field === 'bookStart' || field === 'bookEnd') {
                let arr = e.target.value.split('-');
                let date = {
                    year: arr[0],
                    month: arr[1],
                    day: arr[2],
                }
                this.setState({ [field]: date });
                setTimeout(() => {
                    console.log(this.state);
                }, 0)
            } else if (field === 'guestCount') {
                let guestCount = e.target.value;
                this.setState({ [field]: guestCount });
                setTimeout(() => {
                    console.log(this.state);
                }, 0)
            }
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        if (!this.state.bookStart || !this.state.bookEnd || !this.state.guestCount) {
            console.log('Please fill all fields')
            return;
        }

        if (this.state.bookStart.year > this.state.bookEnd.year) {
            console.log('year is  not valid');
            return;
        }

        if (this.state.bookStart.month > this.state.bookEnd.month) {
            console.log('month is  not valid');
            return;
        }

        if (this.state.bookStart.day > this.state.bookEnd.day) {
            console.log('day is  not valid');
            return;
        }

        if (this.state.guestCount <= 0) {
            console.log('guestCount is not valid');
            return;
        }
        this.props.bookFlat(this.state)
        this.closeModal(e);
    }

    render() {
        return (
            <div>
                <div className="modal">
                    <div className="modal-background" onClick={this.closeModal}></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Book this flat:</p>
                            <button className="delete" onClick={this.closeModal} aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <label>Start: <input onChange={this.onInputChange('bookStart')} type="date" /> </label>
                                <label>End:  <input onChange={this.onInputChange('bookEnd')} type="date" /> </label>
                                <label>Guest Count: <input onChange={this.onInputChange('guestCount')} type="number" /> </label>
                            </form>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success" type="submit" onClick={this.submitForm}>Save changes</button>
                            <button className="button" onClick={this.closeModal}>Cancel</button>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}