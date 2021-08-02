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
import blueImage from "../../../images/blue_goun.jpeg"
import VandWImage from "../../../images/black_white_goun.jpeg"
import WhiteImage from "../../../images/white_goun.jpeg"
import blackImage from "../../../images/black_goun.jpeg"
import EditProductModel from './EditProductModel';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }
});

const data=[{
  "id": 1,
  "title": "KARIGARI",
  "price": 1450,
  "description": "k15 RESTOCK stripe lovePremium cotton flex kinda fabric strip kurt with belt Work - sequins ,cheena and beads on yoke",
  // "category": "men's clothing",
  "Design":"No-ND952",
  "Length":"55",
  "Sizes":"38 to 44",  
  "image":blueImage
  },
  {
  "id": 2,
  "title": "White Goun",
  "price": 1224,
  "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  "category": "men's clothing",
  "Design":"No-ND953",
  "Length":"55",
  "Sizes":"38/42/44/", 
  "image": VandWImage
  },
  {
  "id": 3,
  "title": "White Gown",
  "price": 3650,
  "description": "Feel Bright & Beautiful In Our White Georgette Gown.Premium Georgette Gown With Elegant Sequence Work On Neck & Yoke.Gold Print Paisley On Ghera With Piping Beautiful Intricate Full Jaal Embroidery On Dupatta With Tessels",
  "category": "men's clothing",
  "Length":"55",
  "Design":"No-ND953",
  "Sizes":"38 to 46",  
  "image":WhiteImage
  },
  {
  "id": 4,
  "title": "Black Gown",
  "price": 2995,
  "Design":"No_ND952",
  "description": "Black is Bold,Black Is Beautiful.Premium Georgette Gown With Elegant Aari Work On Neck & Sleeves.Broad Gold Print Border On Ghera.Beautiful Intricate Full Jaal Embroidery On Dupatta With Tessels. Attached Lining In Gown.",
  "Length":"55",
  "Sizes":"38 to 46",  
  "image": blackImage
  },
  // {
  //   "id": 14,
  //   "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
  //   "price": 999.99,
  //   "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
  //   "category": "electronics",
  //   "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
  //   },
  //   {
  //   "id": 15,
  //   "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  //   "price": 56.99,
  //   "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
  //   "category": "women's clothing",
  //   "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
  //   },
  //   {
  //   "id": 16,
  //   "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  //   "price": 29.95,
  //   "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
  //   "category": "women's clothing",
  //   "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
  //   },
  //   {
  //   "id": 17,
  //   "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  //   "price": 39.99,
  //   "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
  //   "category": "women's clothing",
  //   "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
  //   },
  ]

export default function ListProduct({handleClickOpen}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}  style={{maxHeight:"600px",minHeight:"480px",overflow:"scroll"}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Id</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Image</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>title</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>description</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Design</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Sizes</TableCell>
            <TableCell align="left" style={{fontFamily:"roboto",fontWeight:"bold",fontSize:"16px"}}>Length</TableCell>
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
              <TableCell align="left"><img src={row.image} height="200px" width="150px" /></TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.Design}</TableCell>
              <TableCell align="left">{row.Sizes}</TableCell>
              <TableCell align="left">{row.Length}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left" > 
                 <EditProductModel data={row}/>
                  <DeleteIcon color="primary" onClick={()=>{alert(`Are you sure ! yozu want to delete ${row.title}`)}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}