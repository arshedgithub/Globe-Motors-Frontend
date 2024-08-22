import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import CartDrawer from "./CartDrawer";
import { useState } from "react";

const AppBar = () => {

    const [open, setOpen] = useState(false);

    function handleDrawerToggle(status){
        setOpen(!status);
    };

    return (
        <>
            <div id="appbar" style={{ display: "inline" }}>
                <img src="./globe-logo.png" alt="logo" height="50px" />
                <div id="rightside">
                    <IconButton size="large" onClick={() => handleDrawerToggle(open)}>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <IconButton size="large">
                        <AccountCircle />
                    </IconButton>
                </div>
            </div>

            {open ? <CartDrawer /> : null}
        </>
    );
}

export default AppBar;