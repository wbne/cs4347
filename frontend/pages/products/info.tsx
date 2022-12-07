import { useState, useCallback } from "react";
import people from "../../data/generated.json";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  productID: number,
  name: string,
  style: string,
  productType: string,
  price: number,
  size: number,
  weight: number,
  deptID: string,
  view: boolean,
  handleClose: () => void;
}


export default function PersonInfo<PROPS extends Props, >({ productID, name, style, productType, price, size, weight, deptID, view, handleClose }: PROPS) {
  const [open, setOpen] = useState(view);

  const handleClickOpen = () => {
      people.map((data, idx) => {
          console.log(data.name.toLowerCase().trim() == name.toLowerCase().trim());
      })
  };
    
  return (
      <div>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            key={name}
        >
          <DialogTitle>Product Name: {name}</DialogTitle>            
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Typography> List Price: {price} </Typography>
                <Typography> Size: {size} </Typography>
                <Typography> Product Type: {productType}</Typography>
                <Typography> Style: {style} </Typography>
                <Typography> Product ID: {productID} </Typography>
                <Typography> Weight: {weight} </Typography>
                <Typography> Department ID: {deptID} </Typography>                
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Done</Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}