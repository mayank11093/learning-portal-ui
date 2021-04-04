import { useState } from 'react';
import { connect } from 'react-redux';
import { Menu, Segment } from 'semantic-ui-react';
import '../../App.css';
import ReferenceLinks from '../Links';

const App = () => {
	const [activeItem, setActiveItem] = useState('Links');

	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};
	return (
		<Segment>
			<Menu attached='top' tabular widths='3'>
				<Menu.Item
					name='Links'
					active={activeItem === 'Links'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='POC'
					active={activeItem === 'POC'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='Assignments'
					active={activeItem === 'Assignments'}
					onClick={handleItemClick}
				/>
			</Menu>

			<Segment attached='bottom'>
				<ReferenceLinks />
			</Segment>
		</Segment>
	);
};

export default connect()(App);
