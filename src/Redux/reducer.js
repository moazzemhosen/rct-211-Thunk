import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./action.types";

const init = {
  // todos:JSON.parse(localStorage.getItem("todos")) || []

  addTodo: {
    loading: false,
    error: false,
    data: {},
  },

  getTodo: {
    loading: false,
    error: false,
    data: [],
  },
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_TODOS_SUCCESS: {
      return {
        ...store,
        getTodo: {
          ...store.getTodo,
          loading: false,
          data: payload,
        },
      };
    }

    case GET_TODOS_REQUEST: {
      return {
        ...store,
        getTodo: {
          ...store.getTodo,
          loading: true,
        },
      };
    }

    case GET_TODOS_FAILURE: {
      return {
        ...store,
        getTodo: {
          ...store.getTodo,
          error: true,
          loading: false,
        },
      };
    }

    // case ADD_TODO: {
    //     // store.;
    //     // localStorage.setItem("todos",JSON.stringify(store.todos));
    //     return {...store,todos:[...store.todos,payload]}
    // }

    case ADD_TODO_SUCCESS: {
      return {
        ...store,
        getTodo: {
          data: [...store.getTodo.data, payload],
        },

        addTodo: {
          ...store.addTodo,
          loading: false,
          data: payload,
        },
      };
    }

    case ADD_TODO_LOADING: {
      return {
        ...store,
        addTodo: {
          ...store.addTodo,
          loading: true,
        },
      };
    }

    case ADD_TODO_ERROR: {
      return {
        ...store,
        addTodo: {
          ...store.addTodo,
          error: true,
          loading: false,
        },
      };
    }
    

    default:
      return store;
  }
};
