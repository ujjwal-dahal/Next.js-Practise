"use client";


const Error = ({ error, reset }) => {

  return (
    <>
      <h3>Something Went Wrong</h3>
      <h1>Error: {error?.message}</h1>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
};

export default Error;
