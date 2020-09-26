import { createSelector } from 'reselect';

export const getProducts = (state) => state.productGetAllReducer.products;
export const getSortedProducts = (state) => state.productGetAllReducer.sortedProducts;

// export const getIncompleteTodos = createSelector(
//     getTodos,
//     (todos) => todos.filter(todo => !todo.isCompleted),
// );