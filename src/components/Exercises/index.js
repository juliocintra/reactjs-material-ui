import React, { Fragment } from 'react';
import { Grid, Paper, Typography, ListItem, ListItemText, List } from '@material-ui/core';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}

export default ({
    exercises,
    category,
    onSelect,
    exercise: {
        id,
        title = 'Welcome',
        description = 'Please select an exercise from the list on the left.',
    }
}) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    !category || category === group
                        ? <Fragment key={group}>
                            <Typography
                                style={{ textTransform: 'capitalize' }}
                            >
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map(({ id, title }) =>
                                    <ListItem
                                        button
                                        key={id}
                                        onClick={() => onSelect(id)}>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                    variant='h4'
                >
                    {title}
                </Typography>
                <Typography
                    variant='subtitle2'
                    style={{ marginTop: 20 }}
                >
                    {description}
                </Typography>
            </Paper>
        </Grid>
    </Grid>