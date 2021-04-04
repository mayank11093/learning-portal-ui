import { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import '../../App.css';

const Links = ({ linksData }) => {
	const [data, setData] = useState(linksData);

	const headerRow = ['ID', 'Topic', 'Link'];

	const renderBodyRow = ({ id, topic, links }, index) => ({
		key: index,
		cells: [id, topic, links],
	});

	useEffect(() => {
		setData(linksData);
	}, [linksData]);
	return (
		<>
			<Table
				celled
				headerRow={headerRow}
				renderBodyRow={renderBodyRow}
				tableData={data}
			/>
		</>
	);
};

export default Links;
