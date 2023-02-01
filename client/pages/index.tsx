import React, { Suspense } from "react";

const Grid = React.lazy(() => import("../components/grid")); // Lazy-loaded
const Button = React.lazy(() => import("../components/button")); // Lazy-loaded

import { useUserDetails } from "../hooks/useUserDetails";

const Page = () => {
  const { loadMore, loading, userDetails, hasMore } = useUserDetails();
  console.log(loading, "loading");
  return (
    <React.Fragment>
      <Suspense
        fallback={loading ? <div>Please wait, data is being loaded</div> : null}
      >
        <Grid data={userDetails} />
        <Button text="Load More" handleClick={loadMore} hasMore={hasMore} />
      </Suspense>
    </React.Fragment>
  );
};

export default Page;
