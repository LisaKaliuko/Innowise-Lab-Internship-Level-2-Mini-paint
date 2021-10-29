import { RootState } from '@reducers/root.reducer';

export const saveState = (state: RootState): void => {
  const serialisedState = JSON.stringify(state);
  window.localStorage.setItem('app_state', serialisedState);
};

export const loadState = (): RootState | undefined => {
  try {
    const serialisedState = window.localStorage.getItem('app_state');

    if (!serialisedState) return JSON.parse(JSON.stringify({}));

    return JSON.parse(serialisedState);
  } catch (e) {
    console.log((e as Error)?.message || 'some error');
  }
};
