import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Dialog from "./Dailog";
import globalData from "./data";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import CardHeader from "@mui/material/CardHeader";
import Switch from "@mui/material/Switch";
import PublicIcon from "@material-ui/icons/Public";
import { Typography } from "@material-ui/core";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ListItemAvatar } from "@mui/material";

export default function BasicCard() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [members, setMembers] = React.useState([
    { title: "Everyone at Oslash", access: "No Access" }
  ]);

  const handleAccessChange = (event, index) => {
    const val = event.target.value;
    let newMembers = members;
    newMembers[index]["access"] = val;
    console.log("newmembers", newMembers, event.target.value, index);
    setMembers([...newMembers]);
  };

  const addMembers = (newMember) => {
    let newMembers = members;
    console.log("cardnewmember", newMember);
    newMembers = newMembers.concat(newMember);
    console.log("cardnewmember2", newMember);
    setMembers([...newMembers]);
  };

  console.log("rendered", members);

  return (
    <Card sx={{ minWidth: 400 }}>
      <CardHeader
        avatar={<PublicIcon />}
        title="Share to web"
        subheader="Public and share link with anyone"
        action={
          <Switch checked={false} inputProps={{ "aria-label": "controlled" }} />
        }
      />
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <TextField
            id="outlined-name"
            label="People, Emails, Groups "
            onClick={() => setDialogOpen(true)}
            fullWidth
          />
          <Button
            variant="outlined"
            sx={{ textTransform: "none", color: "grey" }}
          >
            <Typography>Invite</Typography>
          </Button>
        </Box>
        <Dialog
          dialogOpenFunction={dialogOpen}
          setDialogOpen={setDialogOpen}
          addMember={addMembers}
        />
        <List>
          {members.map((item, index) => (
            <ListItem button key={item}>
              <ListItemAvatar sx />
              <ListItemText primary={item.title} />
              <Select
                onChange={(event) => handleAccessChange(event, index)}
                value={item.access}
              >
                <MenuItem value={"No Access"}>No access</MenuItem>
                <MenuItem value={"Full access"}>Full Access</MenuItem>
                <MenuItem value={"Can View"}>Can View</MenuItem>
                <MenuItem value={"Can Edit"}>Can Edit</MenuItem>
              </Select>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ backgroundColor: "grey" }}>
        <Button sx={{ textTransform: "none" }}>learn about sharing</Button>
      </CardActions>
    </Card>
  );
}
