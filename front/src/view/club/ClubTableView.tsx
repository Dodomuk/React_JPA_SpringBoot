import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { PureComponent } from 'react';
import { TravelClub } from '../../stores/ClubStore';
import { Pagination } from '@material-ui/lab';


interface Props {
	clubList: Array<TravelClub>;
	onFindClub: Function;
	setPageNum: Function;
	buttonNum : number;
}
@observer
class ClubTableView extends PureComponent<Props> {
	
	render() {
		let { clubList, onFindClub,setPageNum , buttonNum } = this.props;
		let handleChange = (event: React.ChangeEvent<unknown>,value:number) => { 
			setPageNum(value - 1)
		};
		return (
			<>
				<TableContainer component={Paper}>
					<div style={{ textAlign: 'left', marginLeft: '20px' }}>
						클럽 수 : <span>{clubList.length}</span>
					</div>
					<Table>
						<TableHead>
							<TableRow color="red">
								<TableCell align="left">클럽</TableCell>
								<TableCell align="left">소개글</TableCell>
								<TableCell align="left">가입날짜</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{onFindClub.length === 0
								? [...clubList].map((club) => (
										<TableRow key={club.name} hover>
											<TableCell>{club.name}</TableCell>
											<TableCell>{club.intro}</TableCell>
											<TableCell>{club.date}</TableCell>
										</TableRow>
								  ))
								: [...onFindClub([...clubList])].map((club) => (
										<TableRow key={club.name} hover>
											<TableCell>{club.name}</TableCell>
											<TableCell>{club.intro}</TableCell>
											<TableCell>{club.date}</TableCell>
										</TableRow>
								  ))}
						</TableBody>
					</Table>
					<div style={{ margin: '0 auto', padding: '25px 25px', display: 'table' }}>
								<div>
									<Pagination count={buttonNum} color={'primary'} onChange={handleChange}/>

								</div>
							</div>
				</TableContainer>
			</>
		);
	}
}

export default ClubTableView;
