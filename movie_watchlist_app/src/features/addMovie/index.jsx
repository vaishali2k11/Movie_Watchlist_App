import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useGetMoviesMutation } from "../../services/movieApi";
import MovieSearchResult from "../../components/MovieSearchResults";

const AddMoive = () => {
    const [query, setQuery] = useState("")
    const [getMovies, { data: movies }] = useGetMoviesMutation();

    useEffect(() => {
        if (query) {
            fetchMovie()
        }
    }, [query]);

    const fetchMovie = async() =>{
        await getMovies({query});
    };

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };
    return (
        <div style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "570px",
            alignContent: "center",
            marginTop: "50px",
        }}>

            <Paper
                component="form"
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 540,
                }}>

                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Your Movie"
                    value={query}
                    onChange={handleSearch}
                />
                <IconButton type="button" sx={{ p: "10px" }} aria-label="search">

                    <SearchIcon />
                </IconButton>

            </Paper>
            <div className="results">
            {movies?.results?.length> 0 && 
                movies?.results?.map((movie)=> (<MovieSearchResult key={movie.id} movie={movie}/>
                ))}

            </div>

        </div>
    )
}
export default AddMoive;