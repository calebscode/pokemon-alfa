import { Divider, Drawer, Toolbar } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function DrawerNav({ open, setDrawerOpen }) {

  return (
    <>

      <Drawer
        open={open}
        onClose={() => setDrawerOpen(false)}>
        <List>
          <Toolbar>
            <img src={"/Alfa.png"} className="nav-logo"/>
          </Toolbar>
         <ListItem onClick={() => setDrawerOpen(false)}>
            <ListItemText>
              <Link to="/">Pokemon</Link>
            </ListItemText>
          </ListItem>
         <ListItem onClick={() => setDrawerOpen(false)}>
            <ListItemText>
              <Link to="/bag">Backpack</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setDrawerOpen(false)}>
            <ListItemText>
              <Link to="/trainer">Trainer Card</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setDrawerOpen(false)}>
            <ListItemText>
              <Link to="/map">Map</Link>
            </ListItemText>
          </ListItem>
          <ListItem  onClick={() => setDrawerOpen(false)}>
            <ListItemText>
              <Link to="/pokedex">Dex</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Divider/>
    </>

  )
}