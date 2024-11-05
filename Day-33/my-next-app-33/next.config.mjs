/** @type {import('next').NextConfig} */
const nextConfig = {

  redirects : async ()=>{
    return [
      {
        source : "/redirect",
        destination : "/",
        permanent : false,
      }
    ]
  }
};

export default nextConfig;
