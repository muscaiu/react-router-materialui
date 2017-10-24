import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory } from 'react-router'

import registerServiceWorker from './registerServiceWorker';
import Routes from './routes'

injectTapEventPlugin();

ReactDOM.render(
    <Routes history={browserHistory} />,    
    document.getElementById('root')
)

registerServiceWorker()
