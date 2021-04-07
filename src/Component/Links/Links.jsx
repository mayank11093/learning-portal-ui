import { useEffect, useState } from 'react';
import { Input, Table ,Pagination} from 'semantic-ui-react';
import '../../App.css';

const Links = ({ linksData }) => {
	const [data, setData] = useState(linksData);
	const [filteredData, setFilteredData] = useState(data);
	const [searchInput, setSearchInput] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const headerRow = ['ID', 'Topic', 'Link'];
	const rowsPerPage = 4;

	const renderBodyRow = ({ id, topic, links }, index) => ({
		key: index,
		cells: [id, topic, links],
	});

	useEffect(() => {
		setData(linksData);
	}, [linksData]);

	const handleSearchInputChange = (e) => {
		setSearchInput(e.target.value)
		if(searchInput===''){
			setFilteredData(data);
		}
		else{
			const filterData = data.filter(getFilter(e.target.value));
			setFilteredData(filterData);
		}
		
	}

	const getFilter = (search) => (a) => {
		if (!search) {
		  return true;
		}
		const pattern = new RegExp(search, 'i');
		return (
		  a.topic.search(pattern) !== -1
		);
	  };

	  const pagination = (page) => [
		(page - 1) * rowsPerPage,
		(page - 1) * rowsPerPage + rowsPerPage,
	  ];

	return (
		<>
		<Input placeholder="Search..." label="Search" fluid onChange={(e)=>handleSearchInputChange(e)} />
			{filteredData && <Table
				celled
				headerRow={headerRow}
				renderBodyRow={renderBodyRow}
				tableData={filteredData}
			/>}
			{/* <Pagination currentPage={currentPage} totalPages={filteredData!==null?Math.ceil(filteredData.length / rowsPerPage):0} /> */}
		</>
	);
};

export default Links;
