import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Button, Icon} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
// import EditProductModel from './EditProductModel';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }
});

const data=[{
  "id": 1,
  "order Id":"60ec51607cffcd7ee42802b8",
  "title": "KARIGARI",
  "username":"Amaan",
  "price": 1450,
  "Design":"No-ND952",
  "Sizes":"38 to 44",
  },
  {
  "id": 2,
  "title": "White Goun",
  "order Id":"60ec51607cffcd7ee42802b8",
  "username":"Amisha",
  "price": 7450,
  "Design":"No-ND952",
  "Sizes":"32 to 48",
  },
  {
  "id": 3,
  "title": "White Gown",
  "order Id":"60ec51607cffcd7ee42802b8",
  "title": "KARIGARI",
  "price": 3420,
  "username":"Faisal",
  "Design":"No-ND952",
  "Sizes":"38 to 44",
  },
  {
  "id": 4,
  "title": "Black Gown",
  "order Id":"60ec51607cffcd7ee42802b8",
  "username":"Dharra",
  "price": 1420,
  "Design":"No-ND952",
  "Sizes":"38 to 44",
  },
    {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "order Id":"60ec51607cffcd7ee42802b8",
    "username":"Rohan",
    "price": 1450,
    "Design":"No-ND952",
    "Sizes":"38 to 44"
},
    {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "order Id":"60ec51607cffcd7ee42802b8",
    "username":"Amaan",
    "price": 1430,
    "Design":"No-ND952",
    "Sizes":"38 to 44",
    },
    {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "order Id":"60ec51607cffcd7ee42802b8",
    "username":"Amaan",
    "price": 2450,
    "Design":"No-ND952",
    "Sizes":"38 to 44",
    },
  ]

export default function ListOrder({handleClickOpen}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}  style={{maxHeight:"600px",minHeight:"480px",overflow:"scroll"}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Id</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Order Id</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Title</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Username</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Design</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Sizes</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Price</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((row,id) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {id+1}
              </TableCell>
              <TableCell align="left">{row['order Id']}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.Design}</TableCell>
              <TableCell align="left">{row.Sizes}</TableCell>
              {/* <TableCell align="left">{row.Length}</TableCell> */}
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left" > 
                 {/* <EditProductModel data={row}/> */}
                  <Button color="primary" variant="outlined"  onClick={()=>{alert(`Are you want to change Status of ${row.title}`)}}>Track</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}