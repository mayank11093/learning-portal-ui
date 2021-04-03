import { Table, Form, Label, Button, List, Segment, Icon } from 'semantic-ui-react';
import '../App.css';

const POCTable = () => {
	return (
		<>
			<Table celled>
				<Table.Header>
					<Table.HeaderCell width='2' textAlign='center'>
						Sl. No.
					</Table.HeaderCell>
					<Table.HeaderCell width='5' textAlign='center'>
						POC Name
					</Table.HeaderCell>
					<Table.HeaderCell width='5' textAlign='center'>
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
						<Table.Cell>Customer POC</Table.Cell>
						<Table.Cell>
						Java 8, Springboot, Rest
						</Table.Cell>
						<Table.Cell><Icon name="eye"/></Table.Cell>
						<Table.Cell><Icon name="download"/></Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</>
	);
};

export default POCTable;
