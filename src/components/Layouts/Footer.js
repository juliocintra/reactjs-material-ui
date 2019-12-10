import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default props =>
    <Paper>
        <Tabs
            indicatorColor='primary'
            textColor='primary'
            centered
        >
            <Tab label="Item one" />
            <Tab label="Item one" />
            <Tab label="Item one" />
        </Tabs>
    </Paper>