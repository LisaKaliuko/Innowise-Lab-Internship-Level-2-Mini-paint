interface InitialState {
  user: {
    email: string;
  };
}

const initialState: InitialState = {
  user: {
    email: '',
  },
};

const authReducer = (state = initialState): InitialState => {
  return state;
};

export default authReducer;
