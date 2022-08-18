import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { store } from './redux/store';

import './styles/index.scss';

const rootElem = document.getElementById('root')



if (rootElem) {
    const root = ReactDOM.createRoot(rootElem);

    root.render(
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>    
    );
}


