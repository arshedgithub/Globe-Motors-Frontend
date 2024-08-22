import { Button, Drawer, Typography } from "@mui/material";
import { useState } from "react";

const CartDrawer = () => {

    const [open, setOpen] = useState(true);

    return (
        <Drawer open={open} anchor="right">
            <Button style={{ marginLeft: "1rem", marginTop: "0.5rem" }} onClick={() => setOpen(false)}>X</Button>
            <div style={{ margin: "20px", width: "300px", textAlign: "center", verticalAlign: "center" }}>
                <Button variant="contained" onClick={() => setOpen(false)}>Add Item</Button>
            </div>
        </Drawer>
    );
}

export default CartDrawer;