import { connect } from 'react-redux';
import { List, Segment } from 'semantic-ui-react';
import '../App.css';

const Instruction = () => {
	return (
		<>
			<Segment textAlign='left'>
				<List bulleted>
					<List.Item>
						Use your personal github only for learning purpose.
					</List.Item>
					<List.Item>
						All the hand-on related to learning should be done on
						personal laptops.
					</List.Item>
					<List.Item>
						Do not push any password/token to github.
					</List.Item>
					<List.Item>
						In case of any security voilation, strict actions can be
						taken against you.
					</List.Item>
					<List.Item>
						In case of any query/doubt, please contact you
						respective mentor(s).
					</List.Item>
				</List>
			</Segment>
		</>
	);
};

export default connect()(Instruction);
