import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class Header extends Component {
    state = {
        locale: "en",
        name: "",
        packages: 0
    }

    handleChange = (value) => {
       this.setState({
           locale: value
       }) 
    }

    handleSelect = () => {
        this.props.updateLocale(this.state.locale);
    }

    handleInputChange = (value) => {
        this.setState({
            name: value
        })
    }

    handleInput = () => {
        this.props.updateUser(this.state.name);
    }

    handlePackagesChange = (value) => {
        this.setState({
            packages: value
        })
    }

    handlePackages = () => {
        this.props.updatePackages(this.state.packages);
    }

    render() {
        return (
            <div style={{marginTop: "2em"}}>
                <p style={{margin: "3em", display: "inline"}}>
                    <FormattedMessage id="chooseLanguage" defaultMessage="Choose Language in English default"/>
                </p>
                <select onChange={(e) => this.handleChange(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                </select>
                <button onClick={() => this.handleSelect()}>Select Your Langauge</button>
                <div style={{marginTop: "2em"}}>
                   <input type="text" value={this.state.name} onChange={(e) => this.handleInputChange(e.target.value)}></input>
                   <button onClick={() => this.handleInput()}>Set your Name</button>
                </div>
                <div style={{marginTop: "2em"}}>
                   <input type="text" value={this.state.packages} onChange={(e) => this.handlePackagesChange(e.target.value)}></input>
                   <button onClick={() => this.handlePackages()}>Set Number of Packages</button>
                </div>
            </div>
        )
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        updateLocale: (locale) => dispatch({type: "UPDATE_LOCALE", locale: locale}),
        updateUser: (name) => dispatch({type: "UPDATE_USER", name: name}),
        updatePackages: (packages) => dispatch({type: "UPDATE_PACKAGES", packages: packages})
    }
}

export default connect(null, mapDispatchToProps)(Header);