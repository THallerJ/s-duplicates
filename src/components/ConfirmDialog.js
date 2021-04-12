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
import { makeStyles } from '@material-ui/core/styles';
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
		paddingLeft: '30px',
		paddingRight: '30px',
	},
	buttonPanel: {
		padding: '20px',
	},
	confirmButton: {
		backgroundColor: '#76d275',
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: '#43a047',
		},
	},
	cancelButton: {
		backgroundColor: '#ff6f60',
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: '#e53935',
		},
	},
	divider: {
		background: '#282828',
		marginBottom: '20px',
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
				<div>
					<Typography align="center" variant="subtitle2">
						{title}
					</Typography>
				</div>
			</DialogTitle>

			<Divider className={classes.divider} variant="middle" light={true} />

			{/* This makes Confirm Dialog more modular by allowing it to display multiline content */}
			{content.split('\n').map((line, index) => {
				return (
					<DialogContent key={index} className={classes.content}>
						<div>
							<Typography align="center" variant="body1">
								{line}
							</Typography>
						</div>
					</DialogContent>
				);
			})}

			<Grid container alignItems="center" direction="column">
				<DialogActions className={classes.buttonPanel}>
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
