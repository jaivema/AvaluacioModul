# Ejemplos de Reducer

 

## Counter

```js
const complexCounterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':      return {
        ...state,
        count: state.count + 1,
        history: [...state.history, { action: 'INCREMENT', timestamp: Date.now() }]
      };
    case 'DECREMENT':      return {
        ...state,
        count: state.count - 1,
        history: [...state.history, { action: 'DECREMENT', timestamp: Date.now() }]
      };
    case 'RESET':      return {
        ...state,
        count: 0,
        history: []
      };
    default:      return state;
  }
};
```

## Todo

```js
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':      return [...state, { id: action.id, text: action.text, completed: false }];
    case 'TOGGLE_TODO':      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':      return state.filter(todo => todo.id !== action.id);
    default:      return state;
  }
};
```

## Authentication

```js
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':      return { isAuthenticated: true, user: action.user };
    case 'LOGOUT':      return { isAuthenticated: false, user: null };
    default:      return state;
  }
};
```

## Authentication with Loading

```js
const authWithLoadingReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':      return {
        ...state,
        isLoading: true
      };
    case 'LOGIN_SUCCESS':      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        isLoading: false
      };
    case 'LOGIN_FAILURE':      return {
        ...state,
        isAuthenticated: false,
        error: action.error,
        isLoading: false
      };
    case 'LOGOUT':      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:      return state;
  }
};
```

## Cart shooping

```js
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':      return [...state, action.item];
    case 'REMOVE_ITEM':      return state.filter(item => item.id !== action.id);
    case 'UPDATE_QUANTITY':      return state.map(item =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    case 'CLEAR_CART':      return [];
    default:      return state;
  }
};
```

## Form

```js
const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':      return {
        ...state,
        [action.field]: action.value
      };
    case 'RESET_FORM':      return action.initialState;
    default:      return state;
  }
};
```

## Pagination

```js
const paginationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGE':      return {
        ...state,
        currentPage: action.page
      };
    case 'SET_TOTAL_PAGES':      return {
        ...state,
        totalPages: action.totalPages
      };
    default:      return state;
  }
};
```

## Fetching data

```js
const dataReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':      return {
        ...state,
        isLoading: true
      };
    case 'FETCH_SUCCESS':      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case 'FETCH_ERROR':      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:      return state;
  }
};
```
