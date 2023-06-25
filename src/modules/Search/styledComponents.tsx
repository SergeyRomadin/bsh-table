import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const SearchContainer = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "16px",
    border: "1px solid black",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "500px",
    height: "40px",
    boxSizing: "border-box",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    padding: " 8px 0 8px 16px",
    paddingLeft: "16px",
    width: "100%",
    height: "100%",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
}));
