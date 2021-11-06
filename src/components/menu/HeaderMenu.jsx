import { Box, Menu, MenuItem,makeStyles } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { React, useState,useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { clientId } from "../../constants/data";

import { AccountContext } from "../../context/AccountProvider";



const useStyles=makeStyles({
    menuItem:{

      fontSize:14,
      padding:"15px, 60px 5px 24px",
      color:"#4a4a4a",

    },
    logout:{
      border:"none !important",
      boxShadow:"none !important",
      "& > *":{
        padding:"0px !important"
      }
    }
})

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const {setAccount}=useContext(AccountContext);





  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

const onLogoutSuccess = (params) => {
    alert("you have been logged out succesfully");
    console.clear();
    setAccount("");
}

const classes=useStyles();

  
  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            className={classes.logout}
            onLogoutSuccess={onLogoutSuccess}
          ></GoogleLogout>
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;
