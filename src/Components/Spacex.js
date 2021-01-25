import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_LAUNCHES = gql`
  {
    launchesPast(find: { mission_name: "crew-1" }) {
      mission_name
      id
      launch_date_local
    }
  }
`;

function Spacex() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading</p>;
  if (error) return <p>An Error occured!!</p>;
  console.log(data);
  return (
    <div>
      {data.launchesPast.map((launch) => (
        <div key={launch.mission_name}>
          <h1>Mission name:{launch.mission_name}</h1>
          <h3>Id: {launch.id}</h3>
          <h3>Launch date: {launch.launch_date_local}</h3>
        </div>
      ))}
    </div>
  );
}

export default Spacex;
