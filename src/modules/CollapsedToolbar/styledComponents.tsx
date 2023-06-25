import Box from "@mui/material/Box";
import BaseToolbar from "@mui/material/Toolbar";
import { Typography as BaseTypography } from "@mui/material";
import BaseIconButton from "@mui/material/IconButton";
import BaseFilterListIcon from "@mui/icons-material/FilterList";
import { styled } from "@mui/material/styles";

export const ToolbarContainer = styled(Box)<any>(() => ({
    width: "100%",
    paddingTop: "24px",
}));

export const FilterListIcon = styled(BaseFilterListIcon)<any>(() => ({
    color: "#fff",
}));

export const Toolbar = styled(BaseToolbar)<any>(() => ({
    maxWidth: "100%",
}));

export const IconButton = styled(BaseIconButton)<any>(() => ({
    color: "#fff",
    backgroundColor: "#3858B6",
    marginLeft: "24px",
    "&:hover": {
        backgroundColor: "#3858B6",
        opacity: 0.8,
    },
}));

export const Typography = styled(BaseTypography)<any>(() => ({
    flex: "1 1 100%",
    paddingLeft: "12px",
    fontFamily: "Inter",
    fontSize: "22px",
    fontWeight: "500",
    lineHeight: "28px",
    letterSpacing: "0em",
    textAlign: "left",
}));
