import React, { Fragment } from "react";
import { MediaState } from "../../services/MediaType";
import { HomeMediaList } from "./HomeMediaList";
import Error from "../Layout/Error";
import Loader from "../Layout/Loader";
import ScrollerWrapper from "../Layout/ScrollerWrapper";

const HomeMediaWrapper: React.FC<{
  mediaType: string;
  mediaHeading: string;
  data: MediaState;
}> = (props) => {
  const { mediaType, mediaHeading, data: item } = props;

  let loading;
  loading = item.loading && <Loader />;

  let errorMessage;
  errorMessage = item.error && <Error />;

  return (
    <Fragment>
      <h3>{mediaHeading}</h3>
      {loading}
      {errorMessage}
      {!loading && !errorMessage && (
        <ScrollerWrapper>
          <HomeMediaList mediaType={mediaType} items={item.data} />
        </ScrollerWrapper>
      )}
    </Fragment>
  );
};

export default React.memo(HomeMediaWrapper);
