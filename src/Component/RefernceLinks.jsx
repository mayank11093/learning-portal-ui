import { Table } from 'semantic-ui-react';
import '../App.css';

const RefernceLinks = () => {
	return (
		<>
			<Table celled>
				<Table.Header>
					<Table.HeaderCell width='2' textAlign='center'>
						Sl. No.
					</Table.HeaderCell>
					<Table.HeaderCell width='6' textAlign='center'>
						POC Name
					</Table.HeaderCell>
					<Table.HeaderCell width='4' textAlign='center'>
						Topic
					</Table.HeaderCell>
					<Table.HeaderCell width='2' textAlign='center'>
						View
					</Table.HeaderCell>
					<Table.HeaderCell width='2' textAlign='center'>
						Download
					</Table.HeaderCell>
				</Table.Header>
				<Table.Body>
					<Table.Row textAlign='center'>
						<Table.Cell>1</Table.Cell>
						<Table.Cell>java</Table.Cell>
						<Table.Cell>
							<a>adgasfgas</a>
							<br />
							<a>asdvsfdvsa</a>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</>
	);
};

export default RefernceLinks;
