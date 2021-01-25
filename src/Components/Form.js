import React, { useState } from "react";
import { ApolloConsumer, gql, useMutation } from "@apollo/client";

const INSERT_USERS = gql`
  mutation INSERT_USER($name: String!, $rocket: String!) {
    insert_users(objects: { name: $name, rocket: $rocket }) {
      returning {
        id
        name
        rocket
      }
    }
  }
`;

function Form() {
  const [name, setName] = useState("");
  const [rocket, setRocket] = useState("");
  const [twitter, setTwitter] = useState("");
  const [insertUser] = useMutation(INSERT_USERS);
  console.log(insertUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    insertUser({ variables: { name, rocket } })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <label>rocket</label>
        <input
          type="text"
          name="rocket"
          value={rocket}
          onChange={(e) => setRocket(e.target.value)}
        ></input>
        <br />
        <label>twitter</label>
        <input
          type="text"
          name="twitter"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
        ></input>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
