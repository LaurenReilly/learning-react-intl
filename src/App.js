import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import './App.css';
import Details from './components/Details';
import Header from './components/Header'

const en = require('./translations/en.json')
const es = require('./translations/es.json')

//by setting a key= to the locale in the IntlProvider will ensure React re-renders component when locale changes
//should get and set locale from/to redux store
class App extends Component {
  render() {
    let messages;
    if(this.props.locale === "en") {
      messages = en;
    } else if(this.props.locale === "es") {
      messages = es;
    }
    return (
      <IntlProvider locale={this.props.locale} key={this.props.locale} messages={messages}>
        <div className="App">
          <Header/>
          <Details/>
        </div>
      </IntlProvider>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
}

export default connect(mapStateToProps, null)(App);
