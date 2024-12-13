# **1. React Basics**

### **What is React?**
- React is a JavaScript library for building user interfaces.
- It allows you to create reusable components that update efficiently.

### **Core Concepts of React Used:**
- **Components**: Your UI is divided into small, reusable pieces called components. In this app:
  - `App` and `Counter` are functional components.

- **State**: The state in React represents data that changes over time. However, here we are using **Redux** to manage the state globally.

- **Props**: Props (short for properties) are used to pass data from parent to child components. In this app, we don’t need props because Redux provides the state globally.

- **Event Handling**: Buttons have event handlers like `onClick` to trigger actions.

```javascript
<button onClick={() => dispatch(increment())}>Increment</button>
```

---

# **2. Redux Toolkit**

### **What is Redux?**
- Redux is a state management library that allows you to manage the application state in a centralized store.
- It’s useful for apps where multiple components need to access and update the same state.

### **What is Redux Toolkit?**
Redux Toolkit is the **official, recommended way** to write Redux logic. It simplifies the setup and reduces boilerplate.

---

### **Key Redux Toolkit Concepts Used:**

#### **1. Store**
- The **store** is a single object that holds the application state.
- It acts as the **source of truth** for all state in the app.

In `store.js`:
```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

- `configureStore` is a Redux Toolkit function to set up the store with all reducers.

---

#### **2. Slice**
- A **slice** is a collection of Redux logic for a single feature, including:
  - State
  - Reducers (functions that modify the state)
  - Actions (triggers for state changes)

In `counterSlice.js`:
```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0, // Initial state value
};

const counterSlice = createSlice({
  name: 'counter',      // A unique name for the slice
  initialState,         // The initial state
  reducers: {           // Reducer functions to modify the state
    increment: (state) => {
      state.count += 1; // State can be directly mutated thanks to Immer library
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

### **Key Points**:
- **`createSlice`**:
  - Simplifies defining reducers and actions.
  - Automatically generates action creators for each reducer.
- **Immer**:
  - Redux Toolkit uses **Immer** under the hood, which allows you to **mutate the state** directly inside reducers. Immer converts these mutations into immutable updates.

---

#### **3. Actions**
- Actions describe **what happened** in the application.
- In Redux Toolkit, actions are generated automatically from `createSlice`.

Example actions:
```javascript
increment();
decrement();
reset();
```

---

#### **4. Reducers**
- Reducers specify **how the state changes** in response to actions.
- They are pure functions that take the current state and an action as input and return the new state.

Example:
```javascript
increment: (state) => {
  state.count += 1;
},
```

---

#### **5. Provider**
- The `<Provider>` component makes the Redux store available to your entire React app.

In `index.js`:
```javascript
<Provider store={store}>
  <App />
</Provider>
```

---

#### **6. useSelector Hook**
- The `useSelector` hook allows you to access the **state** from the Redux store.
- It takes a selector function that extracts the desired piece of state.

Example:
```javascript
const count = useSelector((state) => state.counter.count);
```

---

#### **7. useDispatch Hook**
- The `useDispatch` hook provides access to the **dispatch** function, which is used to **send actions** to the store.

Example:
```javascript
const dispatch = useDispatch();
dispatch(increment());
```

---

# **3. Event Handling**

In React, you can handle user interactions (like button clicks) using event handlers.

Example:
```javascript
<button onClick={() => dispatch(increment())}>Increment</button>
```
- `onClick` is a React event listener.
- When the button is clicked, it dispatches the `increment` action.

---

# **4. State Flow in Redux**

Here’s the flow of state in the Redux application:

1. **UI Interaction**: A user clicks the "Increment" button.
2. **Dispatch Action**: `dispatch(increment())` is called.
3. **Action Trigger**: Redux Toolkit identifies the `increment` action and runs the reducer logic.
4. **Update State**: The state is updated in the store (`count += 1`).
5. **UI Re-render**: The `useSelector` hook notices the state change and re-renders the UI.

---

# **5. Why Redux?**

Redux is useful because it:
1. Provides a **single source of truth** for state.
2. Makes state predictable and easy to debug.
3. Simplifies sharing state between components.

For example:
- The `count` state can be accessed by multiple components without passing props down through parent-child relationships.

---

# **Summary of Key Terms**

| **Concept**       | **Description**                                                             |
|-------------------|-----------------------------------------------------------------------------|
| Store             | Central place where the app's state is stored.                              |
| Slice             | Contains state, reducers, and actions for a specific feature.              |
| Reducer           | Function that modifies state based on actions.                             |
| Action            | Describes an event that changes the state.                                 |
| Provider          | Makes the Redux store available to React components.                       |
| useSelector       | Hook to access state from the Redux store.                                 |
| useDispatch       | Hook to dispatch actions to the store.                                     |

---

# **How Everything Works Together**
1. `Counter.js` uses `useSelector` to **read state** and `useDispatch` to **trigger actions**.
2. Actions (like `increment`) are generated from `createSlice` and dispatched.
3. Reducers handle the dispatched actions and update the state in the store.
4. The `<Provider>` ensures the store is accessible to all components.

