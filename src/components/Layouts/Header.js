import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default props =>
    <AppBar>
        <ToolBar>
            <Typography variante="headline" color="inherit">
                Exercise Database
            </Typography>
        </ToolBar>
    </AppBar>