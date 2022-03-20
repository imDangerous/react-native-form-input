import React, { useEffect } from 'react';
import RNFormInputModule, { Counter } from 'react-native-form-input';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  useEffect(() => {
    console.log(RNFormInputModule);
  });

  return <Counter label={'Greetings'} />;
};

export default App;
