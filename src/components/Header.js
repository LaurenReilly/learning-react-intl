import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class Header extends Component {
    state = {
        locale: "en"
    }

    handleChange = (value) => {
       this.setState({
           locale: value
       }) 
    }

    handleSubmit = () => {
        this.props.updateLocale(this.state.locale);
    }

    render() {
        return (
            <div>
                <p style={{margin: "3em", display: "inline"}}>
                    <FormattedMessage id="chooseLanguage" defaultMessage="Choose Language in English default"/>
                </p>
                <select onChange={(e) => this.handleChange(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                </select>
                <button onClick={() => this.handleSubmit()}>Select Your Langauge</button>
            </div>
        )
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        updateLocale: (locale) => dispatch({type: "UPDATE_LOCALE", locale: locale})
    }
}

export default connect(null, mapDispatchToProps)(Header);