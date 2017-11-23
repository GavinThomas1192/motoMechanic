export default store => next => action => {
    return typeof action === 'function'
        ? action(store.dispatch)
        : next(action);
}