import React, { useEffect, useState } from "react";
import HeaderScreen from "./HeaderScreen";
import { PlusCircle } from "react-feather";
import { Card } from "react-bootstrap";
import { Tooltip, IconButton, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { ApiModule } from "../api/ApiModule";
import cartoon2 from '../../assets/cartoon2.png'
import Loader from "./Loader";

const MainScreen = () => {
  const [films, setFilms] = useState("");
  const [loading, setLoading] = useState(true);

  const showFilm = () =>{
    ApiModule.getFilms()
      .then((data) => {
        setFilms(data);
        setLoading(false);
      })
  }

  useEffect(() => {
      showFilm()
     ApiModule.getFilms();
  }, []);


  return (
    <div>
      <HeaderScreen />
      <div className="mainScreenContainer">
        <div
          style={{
            marginTop: 2,
            fontWeight: "bold",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Recommended for you
        </div>
        {loading ? (
         <Loader/>
        ) : (
         <div style={{ display: "flex", flexWrap: "wrap" }}>
            {films &&
              films.map((film) => {
                return (
                  <Card className="cardContainer">
                    <Card.Text
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: 15,
                      }}
                    >
                      MOVIE RECOMMENDATION
                    </Card.Text>
                    <div className="cardImageContainer">
                      <Card.Img
                        variant="top"
                        src={film.image}
                        onError={(e) => { e.currentTarget.src = cartoon2;}}
                        className="imageContainer"
                      />
                    </div>
                    <Card.Body>
                      {/* <Card.Title >kjlk</Card.Title> */}
                      <Card.Title
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: 2,
                        }}
                      >
                        {film.title}
                      </Card.Title>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Rating
                          name="half-rating"
                          defaultValue={2.5}
                          precision={0.5}
                        />
                      </div>
                      <Card.Text className="elip">{film.description}</Card.Text>
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                        className="tooltipContainer"
                      >
                        <Tooltip title="View more">
                          <Link to={`/moredetails?id=${film.id}`}>
                            <IconButton>
                              <PlusCircle />
                            </IconButton>
                          </Link>
                        </Tooltip>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
