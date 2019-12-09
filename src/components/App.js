import React, { Component, Fragment } from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

export default class extends Component {
    render() {
        return <Fragment>
            <Header />
            <Footer />
        </Fragment>
    }
}