import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllWatchListMovies } from "../addMovie/moviesSlice";
import MovieGrid from "../../components/MovieGrid";

const WatchListMovies = () => {
    const watchListMovies = useSelector(selectAllWatchListMovies)

    console.log("WatchListMovies", watchListMovies);
    return (
        <Container fixed>
            <Typography variant="h4" style={{ fontWeight: "600" }} mt={4}>
                My WatchList

            </Typography>
            {watchListMovies.length > 0 ? (
                <>
                    <MovieGrid movies={watchListMovies} type="watchList"/>
                </>
                ) : (
                <>
                    <h2>Please Add Movie</h2>
                </>
            )}
        </Container>
    )
}
export default WatchListMovies;