import { createContext } from 'react';
import { IUIContext } from '@/interfaces';
import { initialUIState } from './initialUIstate';

export const UIContext = createContext<IUIContext>(initialUIState);