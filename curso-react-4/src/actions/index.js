import _ from 'lodash';
import jsonplaceholder from "../api/jsonplaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    // HACE LO MISMO QUE CHAIN
    // const usersId = _.uniq(_.map(getState().posts, 'userId'));
    // usersId.forEach(id => dispatch(fetchUser(id)));


    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach((id )=> dispatch(fetchUser(id)))
        .value();
};

//Mucho mas pro, ES5
export const fetchPosts = () => async dispatch => {
        const response = await jsonplaceholder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload : response.data})
    };


export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

//Forma alternativa
/* export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await jsonplaceholder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload : response})
    };
};
*/

//Forma alternativa con memoize

/*
* export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
});
* */
