import { initialState } from './initialState';
import Axios from 'axios';
import { LOGIN_ENDPOINT, USER_ENDPOINT } from '../../Endpoints';
import { LOADING, SET_POC_DATA, SET_USER_DATA, SET_USER_REGISTERED } from './Action';

export const handleLoading = (value) => ({
	type: LOADING,
	payload: value,
});
export const setPOCData = (value) => ({
	type: SET_POC_DATA,
	payload: value,
});

export const fetchPOCData = () => async (dispatch) => {
	handleLoading(true);
	try {
		const response = await Axios.get(POCReducer);
		if (response.status === 200 && response.data) {
			dispatch(setLinksData(response.data, true));
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

export const POCReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POC_DATA:
			return {
				...state,
				pocDetails: action.payload,
			};
		case LOADING:
			return {
				...state,
				loading: action.payload.loading,
			};
		default:
			return {
				pocDetails: null,
		loading: false,
		error: undefined,
			};
	}
};

export default POCReducer;
