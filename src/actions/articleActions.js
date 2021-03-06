import * as types from '../types';
import axios from 'axios';
import { ROOT } from '../config';

export function fetchAllArticles(topic) {
    return function (dispatch) {
        let getURL = ROOT;
        getURL += topic
            ? `/topics/${topic}/articles`
            : '/articles';
        dispatch(fetchArticlesRequest());
        axios
            .get(getURL, { withCredentials: true })
            .then(res => {
                dispatch(fetchArticlesSuccess(res.data.articles));
            })
            .catch(err => {
                dispatch(fetchArticlesFailure(err));
            });
    };
}

export function fetchArticlesRequest() {
    return {
        type: types.FETCH_ARTICLES_REQUEST,
    };
}

export function fetchArticlesFailure(payload) {
    return {
        type: types.FETCH_ARTICLES_FAILURE,
        payload: payload
    };
}

export function fetchArticlesSuccess(payload) {
    return {
        type: types.FETCH_ARTICLES_SUCCESS,
        payload: payload
    };
}

export function changeCommentVisibility(payload) {
    return {
        type: types.CHANGE_COMMENT_VISIBILITY,
        payload: payload
    };
}

export function articleAlterVotes(id, vote) {
    return function (dispatch) {
        dispatch(articleAlterVotesRequest());
        axios
            .put(`${ROOT}/articles/${id}?vote=${vote}`, { withCredentials: true })
            .then(() => {
                dispatch(articleAlterVotesSuccess({ _id: id, vote: vote }));
            })
            .catch((err) => {
                dispatch(articleAlterVotesFailure(err));
            });
    };

}

export function articleAlterVotesRequest() {
    return {
        type: types.ARTICLE_ALTER_VOTES_REQUEST,
    };
}

export function articleAlterVotesSuccess(payload) {
    return {
        type: types.ARTICLE_ALTER_VOTES_SUCCESS,
        payload: payload
    };
}

export function articleAlterVotesFailure(payload) {
    return {
        type: types.ARTICLE_ALTER_VOTES_FAILURE,
        payload: payload
    };
}
