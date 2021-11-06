import { Box, makeStyles } from '@material-ui/core';
import {React , useContext} from 'react'
import {AccountContext} from "../../context/AccountProvider";

import ChatIcon from '@material-ui/icons/Chat';


const useStyle=makeStyles({
    header:{
        height:35,
        background:"#ededed"
        ,padding:"10px 16px"
    }
    ,
    avatar:{
        width:37,
        height:37,
        borderRadius:"50%"
    }
});

 const Header = () => {
     const {account}=useContext(AccountContext);
     const classes=useStyle();

    return (
        <Box className={classes.header}>
            <img src={account.imageUrl} className={classes.avatar}  alt= "Display pic"/>
            <Box>
                <ChatIcon/>
            </Box>
        </Box>
    )
}

export default Header;
