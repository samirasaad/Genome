import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const UserAvatar = ({ width, height, src }) => {
  return (
    <Stack direction="row" spacing={3}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: width, height: height }}
      />
    </Stack>
  );
};

export default UserAvatar;
