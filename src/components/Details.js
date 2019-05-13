import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';

function Details(props) {
    return (
        <div>
            <h1>
                <FormattedMessage id="header" defaultMessage="English Header" />
            </h1>
            <h6>
                <FormattedDate value={new Date(Date.now())}/>
            </h6>
        </div>
    )
}

export default Details;