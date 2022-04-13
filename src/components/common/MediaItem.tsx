import React from "react";
import { Link } from "react-router-dom";
import { MediaItemType } from "../../services/MediaType";
import { formatDate, getVoteColor } from "../../utilities";
import classes from "./MediaItem.module.css";
import noimage from "../../no-image.png";

const MediaItem: React.FC<MediaItemType> = (props) => {
  let {
    vote_average,
    title,
    id,
    poster_path,
    release_date,
    media_type,
    name,
    first_air_date,
    bigPoster,
  } = props;

  const mediaTitle = title ? title : name;
  vote_average = Math.floor(vote_average * 10);

  const voteColor = getVoteColor(vote_average);

  const imbBasePath = "https://image.tmdb.org/t/p/w200";
  const image = poster_path ? imbBasePath + poster_path : noimage;
  const releaseDate = release_date
    ? formatDate(release_date)
    : formatDate(first_air_date);

  return (
    <div
      className={`card rounded-3 ${classes.cardItem} ${
        !bigPoster ? classes.cardItemNoBorder : " shadow-sm "
      }`}
    >
      <Link to={`/${media_type}/${id}`}>
        <img
          className={`img-fluid rounded-top ${
            bigPoster ? classes.cardImageW250 : classes.cardImageW150
          } ${!poster_path && classes["no-image"]}`}
          src={image}
          alt={mediaTitle}
          title={mediaTitle}
        />
      </Link>

      <div className={`c100 p${vote_average} ${voteColor} ${classes.small}`}>
        <span>{vote_average}%</span>
        <div className="slice">
          <div className="bar"></div>
          <div className="fill"></div>
        </div>
      </div>
      <div className={`card-body ${classes.cardBody}`}>
        <Link
          to={`/${media_type}/${id}`}
          className="text-decoration-none text-dark bold"
        >
          <h6>{mediaTitle}</h6>
        </Link>
        <p className="pt-1">{releaseDate}</p>
      </div>
    </div>
  );
};

export default React.memo(MediaItem);
