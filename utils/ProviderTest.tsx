import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/Redux/App';

type ProviderType = {
  children: React.ReactNode;
};

export default function ProviderTest({ children }: ProviderType) {
  return <Provider store={store}>{children}</Provider>;
}
