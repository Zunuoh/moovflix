import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { ArrowLeft } from "react-feather";
import { useQueryParams } from "../../hooks";
import { ApiModule } from "../api/ApiModule";
import Loader from "../main/Loader";
import cartoon2 from '../../assets/cartoon2.png'

const MoreDetailsScreen = (props) => {
  let query = useQueryParams();
  const [filmDetails, setFilmDetails] = useState();
  const [loading, setLoading] = useState(true);

  const getSelectedFilm =  (filmId) => {
    ApiModule.getFilmById(filmId).then((data) =>{
      setFilmDetails(data); setLoading(false); });
  }

  useEffect(() => {
    const selectedfilmId = query.get("id");
    getSelectedFilm(selectedfilmId)
  }, []);

  return (
    <div style={{ padding: 20, overflowY: "hidden" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div style={{ color: "#098193" }}>
          <ArrowLeft style={{ marginRight: 10 }} />
        </div>
      </Link>
      {loading ? (
       <Loader/>
      ) : (
       <Row>
       <Col sm={4}>
         <div style={{ minHeight: "100vh", padding: 20 }}>
           <div className="moreDetailsImageContainer">
             <img
               src={filmDetails?.image ?? ""}
               alt=""
               className="moreDetailsImage"
               onError={(e) => { e.currentTarget.src = cartoon2;}}
             />
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
               <div style={{ fontSize: 20 }}>{filmDetails?.title ?? ""}</div>
               {/*  */}
               <div className="movieDetailsDescription">
                 {filmDetails?.description ?? ""}
               </div>

               <div style={{ marginTop: 20 }}>
                 <Rating
                   name="half-rating"
                   defaultValue={2.5}
                   precision={0.5}
                 />
               </div>
               {/* if filmDetails is not null or undefined, then show the div else dont show anything*/}
               {filmDetails && (
                 <div style={{  }}>
                   <div
                   className="moreDetailsHeaders"
                   >
                     Director:
                   </div>
                   <div className="moreDetailsFont">
                     {filmDetails.director}
                   </div>
                   <div
                    className="moreDetailsHeaders"
                   >
                     Producer:
                   </div>
                   <div className="moreDetailsFont">
                     {filmDetails.producer}
                   </div>
                   <div
                     className="moreDetailsHeaders"
                   >
                     Release Date:
                   </div>
                   <div className="moreDetailsFont">
                     {filmDetails.release_date}
                   </div>
                   <div
                    className="moreDetailsHeaders"
                   >
                     Run Time:
                   </div>
                   <div className="moreDetailsFont">
                     {filmDetails.running_time}
                   </div>
                 </div>
               )}
             </div>
           </div>
         </div>
       </Col>
     </Row>
      )}
    </div>
  );
};

export default MoreDetailsScreen;
