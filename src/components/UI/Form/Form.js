import React from 'react';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4)
    },
    textField: {
        marginBottom: theme.spacing(3)
    }
}));

const Form = props => {
    const classes = useStyles();
    return (
        <Modal
            open={props.show}
            onClose={props.close}
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            className={classes.modal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.show}>
                <div className={classes.paper}>
                    <Typography variant="h5">
                        Add new post
                    </Typography>
                    <form
                        autoComplete="off"
                        noValidate
                        onSubmit={props.submit}
                    >
                        <Grid
                            container
                            direction="column"
                        >

                            <TextField
                                id="standard-basic"
                                label="Title"
                                name="title"
                                value={props.title}
                                onChange={props.changed}
                                className={classes.textField}
                                required
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                name="description"
                                value={props.desc}
                                onChange={props.changed}
                                variant="outlined"
                                className={classes.textField}
                                required
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.textField}
                            >Send</Button>
                            <Typography variant="body2">
                                * required field
                            </Typography>
                        </Grid>
                    </form>
                </div>
            </Fade>
        </Modal>
    );
};

export default Form;