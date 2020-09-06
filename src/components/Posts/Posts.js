import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: '1170px',
        margin: '0 auto'
    },
    paper: {
        padding: theme.spacing(2),
        height: '100%',
    },
    postItem: {
        marginBottom: theme.spacing(3)
    },
    postTitle: {
        marginBottom: theme.spacing(4)
    }
}));

const Posts = props => {
    const classes = useStyles();
    return (
        <Grid
            component="section"
            container
            justify="space-between"
            grid-xs-auto="true"
            className={classes.container}
            spacing={3}
        >
            <Grid container
                  justify="center"
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.clicked}
                >
                    Add new post
                </Button>
            </Grid>
            {props.posts.map(item => <Grid
                item
                xs={12}
                component="article"
                key={item.id}
                className={classes.postItem}
            >
                <Paper
                    elevation={3}
                    className={classes.paper}
                >
                    <Typography
                        variant="h4"
                        className={classes.postTitle}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        paragraph={true}
                        variant="body1"
                    >
                        {item.description}
                    </Typography>
                </Paper>
            </Grid>).reverse()}
        </Grid>
    );
};

export default Posts;