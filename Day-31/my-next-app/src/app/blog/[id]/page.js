
import Script from "next/script";

const BlogDynamicMetaData = ({ params }) => {
  let { id } = params;

  return (
    <>
      <h1>User: {id}</h1>
      <Script
        src="/feature.js" 
      />
    </>
  );
};

export default BlogDynamicMetaData;
