import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import App from './components/App';
import { store, persistor } from './redux/store';
import { GlobalStyle } from './components/Global/Styled';
require('dotenv').config();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {/* <ChakraProvider> */}
            <Suspense fallback={<div>Loading... </div>}>
                <GlobalStyle />
                <App />
            </Suspense>

            {/* </ChakraProvider> */}
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
