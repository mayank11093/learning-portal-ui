import {
	Button,
	Grid,
	Header,
	Icon,
	Segment,
	Card,
	Input,
} from 'semantic-ui-react';
import '../../App.css';
import { useHistory } from 'react-router';

const Assignment = () => {
	const history = useHistory();
	return (
		<>
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<Segment>
							<Grid>
								<Grid.Row columns='3'>
									<Grid.Column verticalAlign='middle'>
										<b>Assignment ID : </b>1001
									</Grid.Column>
									<Grid.Column verticalAlign='middle'>
										<Header as='h2'>Customer POC</Header>
									</Grid.Column>
									<Grid.Column verticalAlign='middle'>
										<b>DeadLine : </b>2021-06-20
									</Grid.Column>
								</Grid.Row>
								<Grid.Row columns='2'>
									<Grid.Column>
										<b>Assigned By : </b>Mentor 1
									</Grid.Column>
									<Grid.Column>
										<b>Status : </b>In-progress
									</Grid.Column>
								</Grid.Row>
								<Grid.Row columns='4'>
									<Grid.Column>
										<Button>
											<b>View POC</b>&nbsp;&nbsp;&nbsp;
											<Icon name='eye' />
										</Button>
									</Grid.Column>
									<Grid.Column>
										<Button>
											<b>Download POC</b>
											&nbsp;&nbsp;&nbsp;
											<Icon name='download' />
										</Button>
									</Grid.Column>
									<Grid.Column>
										<Button>
											<b>Mark Complete</b>
											&nbsp;&nbsp;&nbsp;
											<Icon name='check' />
										</Button>
									</Grid.Column>
									<Grid.Column>
										<Button>
											<b>Do Nothing</b>&nbsp;&nbsp;&nbsp;
											<Icon name='check' />
										</Button>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width='3' />
					<Grid.Column width='10'>
						<Segment>
							<Segment.Group>
								<Segment color='orange'>
									<Header as='h3'>Comments</Header>
								</Segment>
								<Segment textAlign='left'>
									<b>Mentor1 : </b>Start the POC
								</Segment>
								<Segment textAlign='left'>
									<b>Mentee1 : </b>Added few commits
									{/* <span style={{ float: 'right' }}>
										Mark comment as query
									</span> */}
								</Segment>
								<Segment textAlign='left'>
									<b>Mentee1 : </b>Please check
									{/* <span style={{ float: 'right' }}>
										Mark comment as query
									</span> */}
								</Segment>
								<Segment textAlign='left'>
									<b>Mentor1 : </b>Please change the Provider
								</Segment>
								<Segment textAlign='left'>
									<b>Mentee1 : </b>Update in new commit
									{/* <span style={{ float: 'right' }}>
										Mark comment as query
									</span> */}
								</Segment>
							</Segment.Group>
						</Segment>
					</Grid.Column>
					<Grid.Column width='3' />
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width='3' />
					<Grid.Column width='10'>
						<Segment>
							<Segment.Group>
								<Segment color='orange'>
									<Card fluid>
										<Card.Content textAlign='left'>
											<Card.Header>Mentor1</Card.Header>
											<Card.Description>
												Start the POC
											</Card.Description>
										</Card.Content>
									</Card>
								</Segment>
								<Segment color='orange'>
									<Card fluid>
										<Card.Content textAlign='left'>
											<Card.Header>Mentee1</Card.Header>
											<Card.Description>
												Added few commits
											</Card.Description>
										</Card.Content>
										{/* <Card.Content textAlign='right'>
											<Card.Meta>
												Mark comment as query
											</Card.Meta>
										</Card.Content> */}
									</Card>
								</Segment>
							</Segment.Group>
						</Segment>
					</Grid.Column>
					<Grid.Column width='3' />
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width='3' />
					<Grid.Column width='8' verticalAlign='bottom'>
						<Input
							placeholder='Add you comment here.....'
							fluid
							label='Add your comment'
						/>
					</Grid.Column>
					<Grid.Column width='2' verticalAlign='bottom'>
						<Button color='orange' fluid>
							Comment
						</Button>
					</Grid.Column>
				</Grid.Row>
				<Grid.Column width='3' />
			</Grid>
		</>
	);
};

export default Assignment;
