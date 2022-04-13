import React from "react";
import { MediaParamTypes } from "../../services/MediaType";
import CastItem from "./CastItem";

const MediaCast: React.FC<{ medidaType: string; cast: any[] }> = (props) => {
  let cast = props.cast;
  let castHeading;
  if (props.medidaType) {
    castHeading =
      props.medidaType === MediaParamTypes.Movie
        ? "Top Billed Cast"
        : "Series Cast";
  }
  return (
    <div className="grid-container mt-3">
      <h4 className="py-2">{castHeading}</h4>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-start pt-2">
        {cast &&
          cast.map((c) => (
            <div className="col d-flex p-0 mb-3 align-items-stretch" key={c.id}>
              <CastItem item={c} key={c.id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(MediaCast);
