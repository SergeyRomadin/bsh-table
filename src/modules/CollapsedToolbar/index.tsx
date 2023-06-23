import React, { useState } from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "../../styledComponents";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import Search from "../Search";
import RefreshIconBtn from "../RefreshIconBtn";
import FilterList from "../FilterList";

interface EnhancedTableToolbarProps {
    numSelected: number;
}

const styleSX = {
    fontSize: "22px",
    fontWeight: "500",
    lineHeight: "28px",
    letterSpacing: "0em",
    textAlign: "left",
};

export default function CollapsedToolbar(props: EnhancedTableToolbarProps) {
    const [openFilterList, setOpenFilterList] = useState(false);
    const { numSelected } = props;

    return (
        <Box
            sx={{
                pl: "24px",
                pr: "24px",
                pt: "24px",
                // height: "40px",
                // minHeight: "40px",
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            <Toolbar sx={{ width: "100%" }}>
                <RefreshIconBtn />
                {numSelected > 0 ? (
                    <Typography
                        sx={{ flex: "1 1 100%" }}
                        color="inherit"
                        variant="subtitle1"
                        component="div"
                    >
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography
                        sx={{
                            flex: "1 1 100%",
                            paddingLeft: "12px",
                            ...styleSX,
                        }}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                    >
                        Audit of actions
                    </Typography>
                )}
                <Search />
                {numSelected > 0 ? null : (
                    <Tooltip title="Filter list">
                        <IconButton
                            sx={{
                                backgroundColor: "#3858B6",
                                "&:hover": {
                                    backgroundColor: "#3858B6",
                                    opacity: 0.8,
                                },
                            }}
                            onClick={() => setOpenFilterList(!openFilterList)}
                        >
                            <FilterListIcon sx={{ color: "#fff" }} />
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>
            {openFilterList ? (
                <Toolbar>
                    <FilterList />
                    <Tooltip title="Delete">
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            ) : null}
        </Box>
    );
}
