import { connect } from 'react-redux';
import './App.css';
import Routes from './Component/Routes';

const App = () => {
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
				<Register />
			</Segment>
		</Segment>
	);
};

export default connect()(App);
