import React from 'react';
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const ConfirmDialog = ({
	title,
	content,
	open,
	setOpen,
	onConfirm,
	onCancel,
}) => {
	return (
		<Dialog open={open} onBackdropClick={() => setOpen(false)}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>{content}</DialogContent>
			<DialogActions>
				<Button startIcon={<CheckIcon />} onClick={onConfirm}>
					Confirm
				</Button>
				<Button startIcon={<ClearIcon />} onClick={onCancel}>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmDialog;
