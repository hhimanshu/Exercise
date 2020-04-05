import React, { useEffect } from "react";
import { LoadStatus } from "../../constants/loadStatus";
import { useDispatch, useSelector } from "react-redux";
import { getCommunications } from "../../actions/commsLeadActions";
import { Grid } from "@material-ui/core";
import { RootState } from "../../store";

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
            ? communications.map(comm => (
                <div key={comm._id}>
                  <h2>Communications:</h2>
                  <pre>{JSON.stringify(comm, null, 4)}</pre>
                </div>
              ))
            : "No communications found."}
        </Grid>
      </Grid>
    </>
  );
};
