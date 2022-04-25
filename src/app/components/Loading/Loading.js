
import React from "react";
import { LoadingContainer, LoadingWrap, LoadingCircleGroup, LoadingCircle } from './LoadingStyle';
const Loading = ({ on = false }) => {
  return (
    <>
      {on === true ? (
        <LoadingContainer className="app-loading LoadingContainer">
          <LoadingWrap className="LoadingWrap">
            <LoadingCircleGroup className="LoadingCircleGroup">
              <LoadingCircle className="point"></LoadingCircle>
              <LoadingCircle className="point" degree={30} delay={1.1}></LoadingCircle>
              <LoadingCircle className="point" degree={60} delay={1}></LoadingCircle>
              <LoadingCircle className="point" degree={90} delay={0.9}></LoadingCircle>
              <LoadingCircle className="point" degree={120} delay={0.8}></LoadingCircle>
              <LoadingCircle className="point" degree={160} delay={0.7}></LoadingCircle>
              <LoadingCircle className="point" degree={180} delay={0.6}></LoadingCircle>
              <LoadingCircle className="point" degree={210} delay={0.5}></LoadingCircle>
              <LoadingCircle className="point" degree={240} delay={0.4}></LoadingCircle>
              <LoadingCircle className="point" degree={270} delay={0.3}></LoadingCircle>
              <LoadingCircle className="point" degree={300} delay={0.2}></LoadingCircle>
              <LoadingCircle className="point" degree={330} delay={0.1}></LoadingCircle>
            </LoadingCircleGroup>
          </LoadingWrap>
        </LoadingContainer>
      ) : null}
    </>
  );
};
export default Loading;
