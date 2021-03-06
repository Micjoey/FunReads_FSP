import { RECEIVE_ALL_BOOKS, RECEIVE_BOOK } from "../actions/book_actions";

const booksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOK:
            return Object.assign({}, {[action.book.id]: action.book})
        case RECEIVE_ALL_BOOKS:
            return Object.assign({}, action.books)
        default:
            return state;
    }
}

export default booksReducer;