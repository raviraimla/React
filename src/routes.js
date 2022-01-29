import{Users,CreateUser} from "./components/users"
const routes = [
    {
      path: "/",
      element: <Users/>
    },
    {
      path: "/create",
      element: <CreateUser/>
      
    },
    {
      path: "/edit/:id",
      element: <CreateUser/>
    }
  ];

  export default routes;