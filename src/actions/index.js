import {FETCH_USERS_START, FETCH_USERS_ERROR, RECEIVE_USERS, REFRESH_PAGE} from '../constants';
import axios from 'axios';


//http://jsonplaceholder.typicode.com/photos?_limit=10&_page=1



export const listingItems = (page) => {
  let url = "https://jsonplaceholder.typicode.com/photos?_limit=15&_page="+page;
    return function (dispatch) {
      dispatch({type: FETCH_USERS_START});
      axios.get(url)
        .then((response) => dispatch({
          type: RECEIVE_USERS,
          payload: response.data,
        })).catch((response) => dispatch({
          type: FETCH_USERS_ERROR,
          payload: response.error
        }));
    }
}


export const refresh_page = (page) => {
  let url = "https://jsonplaceholder.typicode.com/photos?_limit=15&_page="+page;
    return function (dispatch) {
      dispatch({type: REFRESH_PAGE});
      axios.get(url)
        .then((response) => dispatch({
          type: RECEIVE_USERS,
          payload: response.data,
        })).catch((response) => dispatch({
          type: FETCH_USERS_ERROR,
          payload: response.error
        }));
    }
}
