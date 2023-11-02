import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import {useDispatch} from "react-redux";
import { addMovieToWatchList, addMovieToWatched, removeMovieFromWatchList, removeMovieFromWatched } from "../features/addMovie/moviesSlice";

const MovieControl = ({ type, movie, display }) => {
    const dispatch = useDispatch();
    const ControlButton = styled(Button)(({ _ }) => ({
        color: "#fefefe",
        backgroundColor: "transparent",
        border: "none",
        transition: "all 0.3s ease",
        fontSize: "1.25rem",
        padding: "5px",
        margin: "0",
        minWidth: "0 !important",
    }));
    return (
        <div className={`notdisplayed ${display}`}>
            {type === "watchList" && (
                <Stack direction="row">
                    <ControlButton onClick={()=> dispatch(addMovieToWatched(movie))}>
                        <i className="fa-fw far fa-eye"></i>
                    </ControlButton>
                    <ControlButton onClick={()=> dispatch(removeMovieFromWatchList(movie.id))}>
                        <i className="fa-fw fa fa-times"></i>
                    </ControlButton>
                </Stack>
            )}
            {type === "watched" && (
                <Stack direction="row">
                    <ControlButton onClick={()=> dispatch(addMovieToWatchList(movie))}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </ControlButton>
                    <ControlButton onClick={()=> dispatch(removeMovieFromWatched(movie.id))}>
                        <i className="fa-fw fa fa-times"></i>
                    </ControlButton>
                </Stack>
            )}
        </div>
    )
}
export default MovieControl;