import React from "react";
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import { AppBar, Container, Toolbar, Typography,Button,Box } from '@mui/material';
import{Users,CreateUser} from "./components/users";
import RoutesList from "./routes"

function App() {
  return (<div>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    <BrowserRouter>
      <Routes>
      {RoutesList.map((route, i) => (
            <Route key={i} {...route} />
          ))}
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
