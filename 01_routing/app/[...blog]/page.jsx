//dynamic routes
// catch-all routes
//https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

import React from "react";

export default function Blog({ params }) {
  return <div>Blog Page : {params.blog} </div>;
}
