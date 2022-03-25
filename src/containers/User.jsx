import React from 'react';
import { Container, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Box, Table } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';


const styles = makeStyles((theme) => ({
  Table: {
    width: "100vw",
    height: "400px",
  },
  root: {
    backgroundColor: "#f3f3f3"
  },
  TableBody: {
    backgroundColor: "#fff",
    boxShadow: "10px 10px 10px green",
    border: "2px solid #fff",
  },
  TableCell: {
    fontSize: "24px",
  }
}))

export default function User() {
  const classes = styles();
  return (
    <TableContainer>
      <Table className={classes.Table}>
        <TableHead className={classes.root}>
          <TableRow>
            <TableCell>S.N</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.TableBody}>
          <TableRow>
            <TableCell className={classes.TableCell}>1</TableCell>
            <TableCell className={classes.TableCell}>Md Intezar Alam</TableCell>
            <TableCell className={classes.TableCell}>mdintezar99@gmail.com</TableCell>
            {/* <TableCell className={classes.TableCell}>********</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell className={classes.TableCell}>2</TableCell>
            <TableCell className={classes.TableCell}>Md Intezar Alam</TableCell>
            <TableCell className={classes.TableCell}>mdintezar99@gmail.com</TableCell>
            {/* <TableCell className={classes.TableCell}>********</TableCell> */}
          </TableRow>

          <TableRow>
            <TableCell className={classes.TableCell}>3</TableCell>
            <TableCell className={classes.TableCell}>Md Intezar Alam</TableCell>
            <TableCell className={classes.TableCell}>mdintezar99@gmail.com</TableCell>
            {/* <TableCell className={classes.TableCell}>********</TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
