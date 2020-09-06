import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {axiosBase} from "../../axiosBase";
import withLoader from "../../hoc/withLoader";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(5)
    },
    title: {
        marginBottom: theme.spacing(6)
    },
    subtitle: {
        marginBottom: theme.spacing(4)
    }
}));

const ContactsPage = () => {
    const classes = useStyles();
    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosBase.get('/contacts.json');
            setContacts(response.data);
        };
        fetchData().catch(console.error);
    }, []);


    return contacts && (
        <Grid
            container
            component="section"
            alignContent="center"
            direction="column"
            alignItems="center"
            className={classes.container}
        >
            <Typography
                variant="h4"
                className={classes.title}
            >
                Contacts
            </Typography>
            <Typography
                variant="body2"
                className={classes.subtitle}
                align="center"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur corporis delectus dolorem est expedita, ipsam ipsum maxime nostrum officia pariatur provident quae quisquam quos rem repellat saepe soluta ullam vel voluptatibus! Eius excepturi in, iure porro provident rem repudiandae.
            </Typography>
            <List
                disablePadding={true}
            >
                <ListItem
                    alignItems="center" >
                    {contacts.phone}
                </ListItem>
                <ListItem
                    alignItems="center" >
                    {contacts.address}
                </ListItem>
                <ListItem
                    alignItems="center" >
                    {contacts.email}
                </ListItem>
            </List>
        </Grid>
    );
};

export default withLoader(ContactsPage, axiosBase);