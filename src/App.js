import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import store from './stores/index';
import {Provider} from 'react-redux';
import LocalizationProvider, {LocalizationContext} from './translations';
import APIService from './api';

import {StatusBar} from 'react-native';

function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <LocalizationProvider>
          <LocalizationContext.Consumer>
            {(context) => {
              APIService.getInstance().setLocalizationContext(context);
              return <Routes />;
            }}
          </LocalizationContext.Consumer>
        </LocalizationProvider>
      </Provider>
    </>
  );
}

export default App;
