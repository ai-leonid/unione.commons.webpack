import { useSelector as useSelectorReactRedux, TypedUseSelectorHook } from 'react-redux';
import { State } from './types';


export const useSelector:TypedUseSelectorHook<State> = (
    selector
) => useSelectorReactRedux(selector);
