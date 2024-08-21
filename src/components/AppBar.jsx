import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";

const AppBar = () => {

    return (
        <div id="appbar" style={{ display: "inline" }}>
            <h4>Home</h4>
            <div id="rightside">
                <IconButton size="large">
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <IconButton size="large">
                    <AccountCircle />
                </IconButton>
            </div>
        </div>
    );
}

export default AppBar;