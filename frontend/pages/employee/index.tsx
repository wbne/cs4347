import NavBar from "../home/navbar";
import { Grid, Divider, Box,FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import Cards from "./cards";
import useWindowDimensions from "./windowValue";

export default function Employee() {     
    const { height, width } = useWindowDimensions();

    return (
        <>
            <NavBar/>
            <div style={{textAlign: "center"}}>
                <div style={{display: "inline-block"}}>
                    <Box component={Grid}
                        container
                        spacing={0}
                        sx={{boxShadow: 12, flexDirection: "row"}}
                        style={{ minHeight: '86vh', backgroundColor: "white", position: "static", width: width - 100, marginTop: 80 }}
                    >
                        <Box width="250px" sx={{ml: 2, mt: 2, mr: 2}} component={Grid} item>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                        >
                                            <Search/>
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Box>
                        <Divider sx={{backgroundColor: "#e0e0e0"}} orientation="vertical" flexItem />
                        <Box style={{width: width - 450}} sx={{ml: 4,}}>
                            <Cards/>
                        </Box>
                    </Box>
                </div>
            </div>
        </>
    );

}