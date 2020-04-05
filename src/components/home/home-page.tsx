import React, { useEffect } from "react";
import { LoadStatus } from "../../constants/loadStatus";
import { useDispatch, useSelector } from "react-redux";
import { getInstructions } from "../../actions/instructionsActions";
import ReactMarkdown from "react-markdown";
import { RootState } from "../../store";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInstructions());
  }, [dispatch]);
  const description = useSelector(
    (state: RootState) => state.instructions.description
  );
  const instructionsLoadStatus = useSelector(
    (state: RootState) => state.instructions.instructionsLoadStatus
  );

  if (instructionsLoadStatus === LoadStatus.REQUEST) {
    return <>Loading...</>;
  }

  return (
    <div className="markdown-body">
      <ReactMarkdown source={description} />
    </div>
  );
};
