import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        margin:"4px 8px"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[500],
    },
}));

const CardTile = (props: any) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" srcSet={props.avatar} className={classes.avatar}></Avatar>
                }
                title={props.title + ' ' + props.name}
                subheader={props.jobTitle}
            />
            <CardContent>
                <Typography >{props.companyName}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.jobDesc}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardTile