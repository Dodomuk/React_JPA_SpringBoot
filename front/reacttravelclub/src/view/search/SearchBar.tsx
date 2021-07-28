import React, { Component } from 'react';
import { TextField, InputAdornment, Button, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import {ClubStore} from '../../stores/ClubStore';

interface Props {
	clubStore: ClubStore;
}
@inject('clubStore')
@autobind
@observer
class Searchbar extends Component<Props> {
	
	onChangeSearchText(searchText: string) {
		this.props.clubStore.setSearchText(searchText);
	}

	render() {

		return (
			<>
				<Box m={3}>
					<TextField
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
						onChange={(event) => this.onChangeSearchText(event.target.value)}
					/>
				</Box>
			</>
		);
	}
}

export default Searchbar;
