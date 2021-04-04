import { initialState } from './initialState';
import Axios from 'axios';
import { LINK_ENDPOINT } from '../../Endpoints';
import { LOADING, SET_LINKS_DATA } from './Action';

export const handleLoading = (value) => ({
	type: LOADING,
	payload: value,
});
export const setLinksData = (value) => ({
	type: SET_LINKS_DATA,
	payload: value,
});

export const fetchLinksData = () => async (dispatch) => {
	handleLoading(true);
	try {
		const response = await Axios.get(LINK_ENDPOINT);
		if (response.status === 200 && response.data) {
			dispatch(setLinksData(response.data, true));
		}
	} catch (error) {}
};

export const LinksReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LINKS_DATA:
			return {
				...state,
				linksDetails: action.payload,
			};
		case LOADING:
			return {
				...state,
				loading: action.payload.loading,
			};

		default:
			return {
				linksDetails: null,
				loading: false,
				error: undefined,
			};
	}
};

export default LinksReducer;
