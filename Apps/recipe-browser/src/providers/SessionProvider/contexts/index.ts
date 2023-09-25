import { Context, createContext } from 'react';
import { INITIAL_VALUE } from '../constants';
import { SessionType } from '../types';

export const SessionContext: Context<SessionType> = createContext<SessionType>(INITIAL_VALUE);