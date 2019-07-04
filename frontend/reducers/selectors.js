// use this file to create / export functions that take in state (or a slice of it) and return that state (or slice) in a specific data structure


//e.g. pass in the todos slice from state to #getAllTodos and return an array of todos -- makes it easier to iterate over and render -- can be called in a container's mapStateToProps function

// export const getAllTodos = ({ todos }) => (
// 	Object.keys(todos).map(id => todos[id])
// );