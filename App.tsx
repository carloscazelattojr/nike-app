import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import NavigationApp from '@/navigation';

import { store } from "@/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationApp />
      <StatusBar style="auto" />
    </Provider>
  );
}