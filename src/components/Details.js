import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { connect } from 'react-redux';

function Details(props) {
    return (
        <div>
            <h1>
                <FormattedMessage id="header" description="header for our application" defaultMessage="English Header" />
            </h1>
            <h2>
                <FormattedMessage id="welcome" description="welcome the user" defaultMessage="Welcome default, {name}" values={{name: props.userName}}/>
            </h2>
            <h6>
                <FormattedDate value={new Date(Date.now())}/>
            </h6>
            <p>
                <FormattedMessage id="packagesNumber" description="number of packages in inventory" values={{packages: props.packages}}/>
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