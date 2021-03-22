import React from 'react';
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
	Grid,
	Typography,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
	root: {
		justifyContent: 'center',
	},
	dialog: {
		backgroundColor: 'black',
	},
	title: {
		color: 'white',
		fontSize: '1.5em',
	},
	content: {
		color: 'white',
		padding: '30px',
	},
	confirmButton: {
		backgroundColor: '#76d275',
	},
	cancelButton: {
		backgroundColor: '#ff6f60',
	},
	divider: {
		background: '#282828',
	},
});

const ConfirmDialog = ({
	title,
	content,
	open,
	setOpen,
	onConfirm,
	onCancel,
}) => {
	const classes = useStyles();
	return (
		<Dialog
			PaperProps={{
				style: {
					backgroundColor: '#121212',
					justifyContent: 'center',
				},
			}}
			open={open}
			onBackdropClick={() => setOpen(false)}
		>
			<DialogTitle className={classes.title}>
				<Typography align="center" variant="subtitle2">
					{title}
				</Typography>
			</DialogTitle>

			<Divider className={classes.divider} variant="middle" light={true} />

			<DialogContent className={classes.content}>
				<Typography align="center" variant="body1">
					{content}
				</Typography>
			</DialogContent>

			<Grid container alignItems="center" direction="column">
				<DialogActions>
					<Button
						className={classes.confirmButton}
						startIcon={<CheckIcon />}
						onClick={onConfirm}
					>
						Confirm
					</Button>
					<Button
						className={classes.cancelButton}
						startIcon={<ClearIcon />}
						onClick={onCancel}
					>
						Cancel
					</Button>
				</DialogActions>
			</Grid>
		</Dialog>
	);
};

export default ConfirmDialog;
