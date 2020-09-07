import React, {useEffect, useMemo, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Spinner from "../components/UI/Spinner/Spinner";
import Grid from "@material-ui/core/Grid";

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
    preloader: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff'
    }
}));


const withLoader = (WrappedComponent, axios) => {
    return props => {
        const classes = useStyles();
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);

        const req = useMemo(() => {
            return axios.interceptors.request.use(req => {
                setLoading(true);
                return req;
            });
        }, []);

        const res = useMemo(() => {
            return axios.interceptors.response.use(res => {
                setLoading(false);
                return res;
            }, error => {
                setError(error);
                throw error;
            });
        }, []);

        useEffect(() => {
            return () => {
                axios.interceptors.response.eject(res);
                axios.interceptors.request.eject(req);
            };
        }, [res, req]);

        const errorDismissed = () => {
            setError(null);
            setLoading(false);
        };

            return (
                <>
                    {loading && (
                        <Grid container className={classes.preloader}>
                            <Spinner />
                        </Grid>
                        )}
                    <Modal
                        open={!!error}
                        onClose={errorDismissed}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-desc"
                        className={classes.modal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={!!error}>
                            <div className={classes.paper}>
                                <h2 id="modal-title">Error</h2>
                                <p id="modal-desc">{error && error.message}</p>
                            </div>
                        </Fade>
                    </Modal>
                    <WrappedComponent {...props} />
            </>
        );
    }
};

export default withLoader;