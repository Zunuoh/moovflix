import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { ArrowLeft } from "react-feather";
import cartoon from "../../assets/cartoon2.png";
import { useQueryParams } from "../../hooks";
import axios from "axios";

const MoreDetailsScreen = (props) => {
  let query = useQueryParams();
  const [filmDetails, setFilmDetails] = useState();
  const [loading, setLoading] = useState(false);

  const getFilmById = async (filmId) => {
    const response = await axios(
      `https://ghibliapi.herokuapp.com/films/${filmId}`,
      {
        params: {
          _limit: 1,
        },
      }
    );

    setFilmDetails(response.data);
    setLoading(true);
  };

  useEffect(() => {
    const filmId = query.get("id");
    // alert(filmId);
    // Get film by filmId
    getFilmById(filmId);
  }, []);

  return (
    <div style={{ padding: 20, overflowY: "hidden" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div style={{color: "#098193"}}>
          <ArrowLeft style={{marginRight:10}}/>
        </div>
      </Link>
       { loading ? (
           <Row>
           <Col sm={4}>
             <div style={{ minHeight: "100vh", padding: 20 }}>
               <div className="moreDetailsImageContainer">
                 <img src={filmDetails?.image ?? ''} alt="" className="moreDetailsImage" />
               </div>
             </div>
           </Col>
           <Col sm={8}>
             <div
               style={{
                 minHeight: "100vh",
                 display: "flex",
                 justifyContent: "center",
               }}
             >
               <div className="moreDetailsInformationContainer">
                 <div>
                   <div style={{ fontSize: 20 }}>{filmDetails?.title ?? ''}</div> 
                   {/*  */}
                   <div className="movieDetailsDescription">
                     {filmDetails?.description ?? ''}
                   </div>
   
                   <div style={{ marginTop: 20 }}>
                     <Rating
                       name="half-rating"
                       defaultValue={2.5}
                       precision={0.5}
                     />
                   </div>
                   {/* if filmDetails is not null or undefined, then show the div else dont show anything*/}
                   {filmDetails && <div style={{ marginTop: 20 }}>
                     <div
                       style={{
                         fontFamily: "Montserrat, sans-serif",
                         fontWeight: "bold",
                       }}
                     >
                       Director:
                     </div>
                     <div style={{ fontFamily: "Montserrat, sans-serif" }}>
                       {filmDetails.director}
                     </div>
                     <div
                       style={{
                         marginTop: 20,
                         fontFamily: "Montserrat, sans-serif",
                         fontWeight: "bold",
                       }}
                     >
                       Producer:
                     </div>
                     <div style={{ fontFamily: "Montserrat, sans-serif" }}>
                       {filmDetails.producer}
                     </div>
                     <div
                       style={{
                         marginTop: 20,
                         fontFamily: "Montserrat, sans-serif",
                         fontWeight: "bold",
                       }}
                     >
                       Release Date:
                     </div>
                     <div style={{ fontFamily: "Montserrat, sans-serif" }}>
                       {filmDetails.release_date}
                     </div>
                     <div
                       style={{
                         marginTop: 20,
                         fontFamily: "Montserrat, sans-serif",
                         fontWeight: "bold",
                       }}
                     >
                       Run Time:
                     </div>
                     <div style={{ fontFamily: "Montserrat, sans-serif" }}>
                       {filmDetails.running_time}
                     </div>
                   </div>}
                 </div>
               </div>
             </div>
           </Col>
         </Row>
       ) : (
           <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"20%", color: "#098193"}}>
                <Spinner animation="grow"/>
                <Spinner animation="grow"/>
                <Spinner animation="grow"/>
           </div>
          
       )}
      
    </div>
  );
};

export default MoreDetailsScreen;
