import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const UserAvatar = ({ width, height, src }) => {
  console.log(src);
  return (
    <Stack direction="row" spacing={3}>
      <Avatar
        // alt="Remy Sharp" //if there is name the avatr will be the first leetre of it taken from alt
        src={src ? src : "/broken-image.jpg"}
        sx={{ width: width, height: height }}
      />
    </Stack>
  );
};

export default UserAvatar;
