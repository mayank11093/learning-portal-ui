import { useState } from 'react';
import { Grid, Header, Segment, Menu, Dropdown } from 'semantic-ui-react';
import './App.css';
import POCTable from './Component/POCList';
import RefernceLinks from './Component/RefernceLinks';
import Register from './Component/register';
import { referenceLinks } from './constant';


function App() {
	const options = [
		{ key: 1, text: 'Choice 1', value: 1 },
		{ key: 2, text: 'Choice 2', value: 2 },
		{ key: 3, text: 'Choice 3', value: 3 },
	  ]
	const [activeItem, setActiveItem] = useState('Assignments');
	const [referenceLink, setReferenceLink] = useState(referenceLinks);
	const handleItemClick = (e, { name }) => setActiveItem(name);
	return (
		<div className='App'>
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<Segment color='orange'>
							<Header as='h1' color='orange'>
								Learning Portal
							</Header>
							<Dropdown text='Dropdown' options={options} simple item />
						</Segment>
						
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
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
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}

export default App;
