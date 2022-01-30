import { TableContainer, Table, TableHead, TableRow,TableCell ,TableBody,Paper } from '@mui/material';
import { Link} from "react-router-dom";
const users = (props) => {
    return (<div style={{paddingLeft:'10%'}}>
       
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Mouse</TableCell>
            <TableCell align="right">Keyboard</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.mouse}</TableCell>
              <TableCell align="right">{row.keyboard}</TableCell>
              <TableCell align="right"><Link to={'/edit/'+ row.id}> Edit</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>)
}
export default users;
