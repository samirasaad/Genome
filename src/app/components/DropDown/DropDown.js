import * as React from "react";
import { useIntl } from "react-intl";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import EditIcon from '@mui/icons-material/Edit';
import Divider from "@mui/material/Divider";
// import ArchiveIcon from '@mui/icons-material/Archive';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';/
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UserAvatar from "../UserAvatar/UserAvatar";
import "./DropDown.scss";
import history from "../../../utilis/history";
import { useDispatch } from "react-redux";
import { loginReceive } from "../../../store/actions/auth";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.remove('token');
    history.push("/auth/login");
    dispatch(loginReceive(localStorage.getItem("token") || null));
  };

  return (
    <div className="dropdown user-drop-down">
      <button
        className="d-flex align-items-center  dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <UserAvatar width={39} height={39} />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li>
          <button className="dropdown-item" type="button">
            Action
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Another action
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={handleLogout}
          >
            {intl.formatMessage({ id: "HEADER.LOGOUT" })}
          </button>
        </li>
      </ul>
    </div>
  );
}
