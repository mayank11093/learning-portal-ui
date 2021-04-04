import { initialState } from './initialState';
import Axios from 'axios';
import { LOGIN_ENDPOINT, USER_ENDPOINT } from '../../Endpoints';
import { LOADING, SET_USER_DATA, SET_USER_REGISTERED } from './Action';

export const handleLoading = (value) => ({
	type: LOADING,
	payload: value,
});
export const setUserData = (value, action) => ({
	type: SET_USER_DATA,
	payload: value,
	isLoggedIn: action,
});
export const setUserRegistered = (value) => ({
	type: SET_USER_REGISTERED,
	payload: value,
});

export const handleLogin = ({ emailID, password }) => async (dispatch) => {
	handleLoading(true);
	try {
		const response = await Axios.post(LOGIN_ENDPOINT, {
			emailID: emailID,
			password: password,
		});
		if (response.status === 200 && response.data) {
			dispatch(setUserData(response.data, true));
		}
	} catch (error) {}
};

export const handleRegister = ({
	fullName,
	employeeID,
	emailID,
	password,
	contact,
}) => async (dispatch) => {
	handleLoading(true);
	try {
		const response = await Axios.post(USER_ENDPOINT, {
			fullName,
			employeeID,
			emailID,
			password,
			contact,
		});
		console.log('response.data');
		if (response.status === 200 && response.data) {
			dispatch(setUserRegistered(response.data));
		}
	} catch (error) {}
};

export const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				isLoggedIn: action.isLoggedIn,
				userDetails: action.payload,
			};
		case LOADING:
			return {
				...state,
				loading: action.payload.loading,
			};
		case SET_USER_REGISTERED:
			return {
				...state,
				isRegistered: action.payload,
			};
		default:
			return {
				isLoggedIn: false,
				userDetails: null,
				loading: false,
				isRegistered: false,
				error: undefined,
			};
	}
};

export default UserReducer;
