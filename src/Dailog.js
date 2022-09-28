import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Button from "@material-ui/core/Button";
import globalData from "./data";

const InputDialog = (props) => {
  const data = [
    { title: "Wade Cooper", year: 1994, tag: "Select a Person" },
    { title: "Arlene Mccoy", year: 1972, tag: "Select a Person" },
    { title: "Product", year: 1972, tag: "Select a Group" },
    { title: "Engineering", year: 1972, tag: "Select a Group" }
  ];
  const [value, setValue] = useState([]);
  const [access, setAccess] = useState();
  console.log("value", value);
  console.log("access", access);

  const handleAccessChange = (event) => {
    setAccess(event.target.value);
  };

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const handleInvite = () => {
    console.log(globalData);
    let newMembers = value;
    newMembers.forEach((newMember) => (newMember.access = access));
    console.log("newmember-----", newMembers);
    props.addMember(newMembers);
    console.log(globalData);
    props.setDialogOpen(false);
  };

  return (
    <Dialog
      open={props.dialogOpenFunction}
      onClose={() => props.setDialogOpen(false)}
      maxWidth={"xl"}
    >
      <DialogContent dividers>
        <Box
          noValidate
          component="form"
          sx={{
            display: "flex",
            flexDirection: "row",
            m: "auto",
            width: "fit-content"
          }}
        >
          <Autocomplete
            id="grouped-demo"
            options={data.sort((a, b) => -b.tag.localeCompare(a.tag))}
            groupBy={(option) => option.tag}
            getOptionLabel={(option) => option.title}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Search emails,names or groups" />
            )}
            onChange={(event, newValue) => {
              handleValueChange(newValue);
            }}
            multiple
          />
          <FormControl sx={{ minWidth: 120 }}>
            <Select onChange={handleAccessChange}>
              <MenuItem value={"No Access"}>No access</MenuItem>
              <MenuItem value={"Full access"}>Full Access</MenuItem>
              <MenuItem value={"Can View"}>Can View</MenuItem>
              <MenuItem value={"Can Edit"}>Can Edit</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            onClick={(e) => {
              handleInvite(e);
            }}
            disabled={Boolean(!value || !access)}
            sx={{ textTransform: "none" }}
          >
            Invite
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default InputDialog;
