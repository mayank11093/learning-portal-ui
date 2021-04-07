import { useState } from 'react';
import { Table, Icon,Input, Modal } from 'semantic-ui-react';
import '../../App.css';
import file from '../../Files/word-file.docx'
import FileViewer from "react-file-viewer";

const POCTable = () => {
    const [open,setOpen] = useState(false)
    const onError = e => {
        console.log(e, "error in file-viewer");
      };
	return (
		<>
        <Input placeholder="Search..." label="Search" fluid />
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
						<Table.Cell>Java 8, Springboot, Rest</Table.Cell>
						<Table.Cell>
							<Icon name='eye' onClick={()=>setOpen(true)} />
						</Table.Cell>
						<Table.Cell>
							<a href={file}><Icon name='download' /></a>
						</Table.Cell>
					</Table.Row>
                    <Table.Row textAlign='center'>
						<Table.Cell>1</Table.Cell>
						<Table.Cell>Customer POC</Table.Cell>
						<Table.Cell>Java 8, Springboot, Rest</Table.Cell>
						<Table.Cell>
							<Icon name='eye' />
						</Table.Cell>
						<Table.Cell>
							<Icon name='download' />
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
            <Modal
            onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}>
          <FileViewer fileType={"docx"} filePath={file} onError={onError} />
      </Modal>
		</>
	);
};

export default POCTable;
