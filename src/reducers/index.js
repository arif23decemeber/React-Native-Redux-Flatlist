import {FETCH_USERS_START, FETCH_USERS_ERROR, RECEIVE_USERS, REFRESH_PAGE} from '../constants';

const initialState = {
  fetching: false,
  fetched: false,
  data : [],
  error : null,
  page: 0,
  loading: false,
  refreshing: false
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START: {
      return {
        ...state,
        page: state.page + 1,
        fetching: true,
        loading: true
      }
      break;
    }

    case FETCH_USERS_ERROR: {
      return {
        ...state,
        fetching: false,
        error: action.payload,
        loading: false,
        refreshing: false
      }
      break;
    }

    case RECEIVE_USERS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data : [...state.data, ...action.payload],
        loading: false,
        refreshing: false
      }
      break;
    }

    case REFRESH_PAGE: {
      return {
        fetching: false,
        fetched: false,
        data : [],
        error : null,
        page: 1,
        loading: false,
        refreshing: true
      }
      break;
    }


    default:
        return state;
  }
}

export default items;
