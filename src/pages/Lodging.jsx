import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import TagName from "../components/TagName";
import starFull from "../img/starFull.svg";
import starEmpty from "../img/starEmpty.svg";
import Collapse from "../components/Collapse";
import Error404 from "./Error404";
import Footer from "../components/Footer";

const Lodging = () => {
  // Context import (datas)
  const data = useContext(AppContext);
  // Location storage to differentiate components className depending on the page location
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  // URL storage
  const urlId = useParams().id;
  // Basic state of specific datas
  const [lodgingData, setLodgingData] = useState({
    cover: "",
    description: "",
    equipments: [],
    host: { name: "", picture: "" },
    id: "",
    location: "",
    pictures: [],
    rating: "",
    tags: [],
    title: "",
  });

  // Corresponding lodging data storage
  useEffect(() => {
    const pushLodgingData = async () => {
      // Searching corresponding lodging data
      let found = data.find((o) => o.id === urlId);
      // Push these in lodgingData
      await setLodgingData(found);
      // Go to top of page when re-render
      window.scrollTo(0, 0);
    };
    pushLodgingData();
  });

  // Error handling if the lodging id is not correct
  if (lodgingData === undefined) {
    return <Error404 />;
  }
  // Display a loading spinner if data takes a long time to store
  if (!lodgingData) {
    return (
      <div>
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    );
  }

  // Separation of surname and first name from data
  let name = lodgingData.host.name.split(" ");

  return (
    <div>
      <div className="main_content">
        <Header />
        {/* If loadgingData are ok, display this */}
        {lodgingData && (
          <section>
            <>
              <Slideshow data={lodgingData.pictures} />
              <div className="lodging_block">
                <div className="lodging_block_infos">
                  <div className="lodging_block_infos_item title-location">
                    <h2>{lodgingData.title}</h2>
                    <p>{lodgingData.location}</p>
                  </div>
                  <div className="lodging_block_infos_item tagName">
                    {/* Creation of a tag item for each tag present in data*/}
                    {lodgingData.tags.map((tag, index) => {
                      return <TagName tag={tag} key={index} />;
                    })}
                  </div>
                </div>
                <div className="lodging_block_infos flexBlock">
                  <div className="lodging_block_infos_item hostInfos">
                    <div className="hostInfos_name">
                      <p>{name[0]}</p>
                      <p>{name[1]}</p>
                    </div>
                    <div className="host_picture">
                      <img src={lodgingData.host.picture} alt="host-pic" />
                    </div>
                  </div>
                  <div className="lodging_block_infos_item rating">
                    {/* Creating a different display of stars for each host rating */}
                    {lodgingData.rating == 1 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating == 2 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating == 3 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating == 4 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {lodgingData.rating == 5 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Differentiate components className depending on the page location */}
              <div className={"collapse_box" + location}>
                <Collapse
                  label="Description"
                  content={lodgingData.description}
                />
                <Collapse
                  label="Équipements"
                  content={
                    <ul>
                      {/* Creation of a li for each data index in equipment */}
                      {lodgingData.equipments.map((equipement, index) => {
                        return <li key={index}>{equipement}</li>;
                      })}
                    </ul>
                  }
                />
              </div>
            </>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Lodging;
