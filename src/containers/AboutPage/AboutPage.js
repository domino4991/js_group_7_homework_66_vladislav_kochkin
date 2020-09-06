import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {axiosBase} from "../../axiosBase";
import withLoader from "../../hoc/withLoader";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center'
    }
}));

const AboutPage = () => {
    const classes = useStyles();
    const [about, setAbout] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosBase.get('/about.json');
            setAbout(response.data);
        }
        fetchData().catch(console.error);
    }, []);

    return (
        <Grid component="section">
            <Typography variant="h3" align="center" gutterBottom={true}>
                About
            </Typography>
            <Paper elevation={0} className={classes.paper}>
                <Typography variant="h4" gutterBottom={true}>
                    {about.title}
                </Typography>
                <Typography variant="body2">
                    {about.description}
                </Typography>
            </Paper>
        </Grid>
    );
};

export default withLoader(AboutPage, axiosBase);