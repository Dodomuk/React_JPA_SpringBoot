import React, { PureComponent } from 'react';
import { Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Save, Delete, Update } from '@material-ui/icons';
import { NavLink, Route } from 'react-router-dom';
import { AddButton, TrashButton } from '../../resources/ButtonColor';
import { observer } from 'mobx-react';

interface Props {
	onSetName: Function;
	onSetIntro: Function;
	onAddClub: Function;
	onUpdateClub: Function;
	onDeleteClub: Function;
	name: string;
	intro: string;
}
@observer
class ClubTopView extends PureComponent<Props> {
	state = {
		selected: null,
		hasError: false,
	};

	handleChange(value: any) {
		this.setState({ selected: value });
	}

	render() {
		const { onSetName, onSetIntro, onAddClub, onUpdateClub, onDeleteClub, name, intro } = this.props;
		//input
		return (
			<>
				<form noValidate>
					<Grid container xs={10} spacing={1}>
						<Grid item xs={3}>
							<TextField
								margin="normal"
								id="outlined-basic"
								label="name"
								required
								variant="standard"
								value={name}
								onChange={(event) => onSetName(event.target.value)}
							/>
						</Grid>
							<Grid item xs={3}>
								<TextField
									margin="normal"
									id="outlined-basic"
									label="intro"
									variant="standard"
									value={intro}
									onChange={(event) => onSetIntro(event.target.value)}
								/>
							</Grid>
						<Grid item lg={6}>
						</Grid>
						<Grid item xs={4}>
							<AddButton
								variant="contained"
								color="primary"
								startIcon={<Save />}
								onClick={() => onAddClub(name, intro)}>
								Add
							</AddButton>
							&nbsp;&nbsp;
							<TrashButton
								variant="contained"
								color="default"
								startIcon={<Update />}
								onClick={() => onUpdateClub(name, intro)}>
								Update
							</TrashButton>
							&nbsp;&nbsp;
							<Button variant="contained" color="default" startIcon={<Delete />} onClick={() => onDeleteClub(name)}>
								Delete
							</Button>
							&nbsp;&nbsp;
						</Grid>
					</Grid>
				</form>
			</>
		);
	}
}

export default ClubTopView;
