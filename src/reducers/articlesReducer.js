import * as types from '../types';
import {normaliseData} from '../utils';


export const initialState = {
    articles: {},
    loading: false,
    error: null,
};

export function articlesReducer(prevState = initialState, action) {
    const newState = Object.assign({}, prevState);

    if (action.type === types.FETCH_ARTICLES_REQUEST) {
        newState.loading = true;
    }
    else if (action.type === types.FETCH_ARTICLES_SUCCESS) {
        newState.articles = normaliseData(action.payload);
        newState.loading = false;
    }
    else if (action.type === types.FETCH_ARTICLES_FAILURE) {
        newState.error = action.payload;
        newState.loading = false;
    }
    else {
        return prevState;
    }
    return newState;
}