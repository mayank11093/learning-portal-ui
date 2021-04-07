import { useState } from 'react';
import { Table, Icon,Input, Modal } from 'semantic-ui-react';
import '../../App.css';
import file from '../../Files/word-file.docx'
import FileViewer from "react-file-viewer";
import { useHistory } from 'react-router';

const AssignmentTable = () => {
    const history = useHistory();
	return (
		<>
        <Input placeholder="Search..." label="Search" fluid />
			<Table celled>
				<Table.Header>
					<Table.HeaderCell width='2' textAlign='center'>
						Assignment ID
					</Table.HeaderCell>
					<Table.HeaderCell width='5' textAlign='center'>
						POC Name
					</Table.HeaderCell>
					<Table.HeaderCell width='3' textAlign='center'>
						Assigned By
					</Table.HeaderCell>
					<Table.HeaderCell width='3' textAlign='center'>
						Deadline
					</Table.HeaderCell>
					<Table.HeaderCell width='3' textAlign='center'>
						Status
					</Table.HeaderCell>
				</Table.Header>
				<Table.Body>
					<Table.Row textAlign='center' onClick={()=>history.push('/assignment/1001')}>
						<Table.Cell>1001</Table.Cell>
						<Table.Cell>Customer POC</Table.Cell>
						<Table.Cell>Mentor 1</Table.Cell>
						<Table.Cell>
							2021-04-20
						</Table.Cell>
						<Table.Cell>
							In-progress
						</Table.Cell>
					</Table.Row>
                    
				</Table.Body>
			</Table>
            
		</>
	);
};

export default AssignmentTable;
