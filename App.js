import React from 'react';
import {Provider} from 'mobx-react';
import AppNavigation from './src/navigation/AppNavigation';
import stores from './src/stores';

const App = () => {
  return (
    <Provider {...stores}>
      <AppNavigation></AppNavigation>
    </Provider>
  );
};

export default App;
