import React from 'react';
import { render } from '@testing-library/react-native';
import type { RenderOptions } from '@testing-library/react-native';
import type { PreloadedState } from '@reduxjs/toolkit';
import type { AppStore, RootState } from '../store';
import Wrapper from './providerWrapper';
import { reduxStore } from '../store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  { ...renderOptions }: ExtendedRenderOptions = {},
) {
  return { reduxStore, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
