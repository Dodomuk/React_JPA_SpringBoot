import { Button, createStyles, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Theme, withStyles } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import React, { Component } from 'react';
import { CheckBox } from '@material-ui/icons';
import  TreeItem  from '@material-ui/lab/TreeItem';
import { TreeView } from '@material-ui/lab';

const useStyles = (theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			height: "300vh",
			textAlign: 'left',
			color: theme.palette.text.secondary,
            fontSize : "large"
		},
        text :{
            padding: theme.spacing(2),
			textAlign: 'left',
			color: "black",
        }
	});

    interface Props {
	classes: {
		root?: string;
		paper?: string;
        text?:string;
	};
}

class MainView extends Component<Props, {}> {
	render() {
		const { classes } = this.props;
		return (               
            <form noValidate>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={4} sm={3}>
						<Paper className={classes.paper}>
                        <TreeView  defaultExpandIcon = {<FolderIcon/>} defaultCollapseIcon={<FolderOpenIcon/>}  >
                           <TreeItem nodeId="1" label="클래스룸 등록">
                           <TreeItem nodeId="2" label="정"/>
                           <TreeItem nodeId="3" label="동"></TreeItem>
                           <TreeItem nodeId="4" label="묵"></TreeItem>
                            </TreeItem> 
                            <TreeItem nodeId="2" label="클래스룸 ">
                           <TreeItem nodeId="6" label="정"/>
                           <TreeItem nodeId="7" label="동"></TreeItem>
                           <TreeItem nodeId="8" label="묵"></TreeItem>
                            </TreeItem> 
                            </TreeView>

                        </Paper>
					</Grid>
                    <Grid item xs={9}>
						<Paper className={classes.text}>
                            <h1 color="black">클래스룸 등록</h1>
                            <hr/>
                            <br/>
                            <Button variant="outlined" size="large"><SystemUpdateAltIcon/>다운로드</Button>
                            <hr color="#283593"/>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><CheckBox/></TableCell>
                                        <TableCell>유형</TableCell>
                                        <TableCell>파일명</TableCell>
                                        <TableCell>소유자</TableCell>
                                        <TableCell>사이즈</TableCell>
                                        <TableCell>생성일</TableCell>
                                        <TableCell>변경일</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell><CheckBox/></TableCell>
                                        <TableCell><AttachFileIcon/></TableCell>
                                        <TableCell>과제 (3).PNG</TableCell>
                                        <TableCell>이나경</TableCell>
                                        <TableCell>6.78 KB</TableCell>
                                        <TableCell>2021.07.20 18:28:16</TableCell>
                                        <TableCell>2021.07.20 18:28:16</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
					</Grid>
				</Grid>
			</div>
            </form>
		);
	}
}
export default withStyles(useStyles)(MainView);
