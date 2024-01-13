import { Box, Divider, Drawer, ListItemButton, ListItemIcon, Toolbar } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

// nav icons
import { CatchingPokemon } from "@mui/icons-material";
import BackpackIcon from '@mui/icons-material/Backpack';
import FaceIcon from '@mui/icons-material/Face';
import MapIcon from '@mui/icons-material/Map';
import ChecklistIcon from '@mui/icons-material/Checklist';

export default function DrawerNav({ open, setDrawerOpen }) {

  const navItems = [
    {
      text: "Pokémon",
      icon: <CatchingPokemon/>,
      path: '/'
    },
    {
      text: "Bag",
      icon: <BackpackIcon/>,
      path: '/bag'
    },
    {
      text: "Trainer",
      icon: <FaceIcon/>,
      path: '/trainer'
    },
    {
      text: "Map",
      icon: <MapIcon/>,
      path: '/map'
    },
    {
      text: "Pokédex",
      icon: <ChecklistIcon/>,
      path: '/pokedex'
    },
  ]

  return (
    <>

      <Drawer
        open={open}
        onClose={() => setDrawerOpen(false)}>
        <Box sx={{width: "100%"}}>
          <List className="nav-links">
            <Toolbar>
              <img src={"/Alfa.png"} className="nav-logo"/>
            </Toolbar>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding onClick={() => setDrawerOpen(false)}>
                  <ListItemButton >
                  {item.icon &&
                    <ListItemIcon className="nav-icon">
                      {item.icon}
                    </ListItemIcon>
                  }
                  <ListItemText>
                    <Link to={item.path}>{item.text}</Link>
                  </ListItemText>
                  </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Divider/>
    </>

  )
}