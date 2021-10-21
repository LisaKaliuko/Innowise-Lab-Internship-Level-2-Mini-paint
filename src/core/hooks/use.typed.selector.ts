import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../reducers/root.reducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
