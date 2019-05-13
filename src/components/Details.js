import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { connect } from 'react-redux';

function Details(props) {
    return (
        <div>
            <h1>
                <FormattedMessage id="header" defaultMessage="English Header" />
            </h1>
            <h2>
                <FormattedMessage id="welcome" defaultMessage="Welcome default, {name}" values={{name: props.userName}}/>
            </h2>
            <h6>
                <FormattedDate value={new Date(Date.now())}/>
            </h6>
            <p>
                <FormattedMessage id="packagesNumber" values={{packages: props.packages}}/>
            </p>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        userName: state.userName,
        packages: state.packages
    }
}

export default connect(mapStateToProps, null)(Details);