import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import {ClubStore} from '../src/stores/ClubStore';

import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<Provider clubStore={new ClubStore()}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
);
