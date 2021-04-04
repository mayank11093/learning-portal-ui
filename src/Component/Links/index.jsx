import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { fetchLinksData } from '../../Redux/LinksReducer';
import Links from './Links';

const ReferenceLinks = () => {
	const dispatch = useDispatch();

	const links = useSelector((state) => state.LinksReducer.linksDetails);

	useEffect(() => {
		dispatch(fetchLinksData());
	}, [dispatch]);

	return (
		<>
			<Links linksData={links} />
		</>
	);
};

export default ReferenceLinks;
