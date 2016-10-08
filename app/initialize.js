import React from 'react';
import { render } from 'react-dom';

import { store, bindActionCreator } from './store';
import App from './components/App';

/* eslint-disable */
document.addEventListener('DOMContentLoaded', () => {
  store.subscribe(function() {
    render(<App {...store.getState()} dispatch={bindActionCreator}/>, document.getElementById('app'));
  });

  store.dispatch({type: '@@INIT'});
});
/* eslint-enable */
