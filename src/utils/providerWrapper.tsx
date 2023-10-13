import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { reduxStore } from '../store';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};

export default Wrapper;
