import React, { useEffect } from "react";
import { LoadStatus } from "../../constants/loadStatus";
import { useDispatch, useSelector } from "react-redux";
import { getCommunications } from "../../actions/commsLeadActions";
import { Grid } from "@material-ui/core";
import { RootState } from "../../store";
import { Communication } from "./communication";

export default () => {
  const communications = useSelector(
    (state: RootState) => state.commsLead.communications
  );

  const commsLeadLoadStatus = useSelector(
    (state: RootState) => state.commsLead.commsLeadLoadStatus
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommunications());
  }, [dispatch]);

  if (commsLeadLoadStatus === LoadStatus.REQUEST) {
    return <>Loading...</>;
  }
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {communications.length > 0
            ? communications.map(comm => <Communication comm={comm} />)
            : "No communications found."}
        </Grid>
      </Grid>
    </>
  );
};
