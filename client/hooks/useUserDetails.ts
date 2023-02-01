import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_USER_DETAILS } from "../queries/user";

export const useUserDetails = (limit = 20) => {
  const [userDetails, setUserDetails] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { data, loading, error, fetchMore } = useQuery(FETCH_USER_DETAILS, {
    variables: { limit, offset: 0 },
    onCompleted: (res) => {
      if (res.user.length < 20) {
        setHasMore(false);
      }
      setUserDetails(res.user);
    },
  });

  const hasMoreData = (response) => {
    if (response.length === 0 || userDetails.length < 20) {
      setHasMore(false);
    }
  };

  const loadMore = async () => {
    try {
      const fetchMoreResponse = await fetchMore({
        variables: {
          offset: userDetails.length,
        },
      });
      if (fetchMoreResponse?.data?.user.length === 0) {
        setHasMore(false);
      }
      //hasMoreData(fetchMoreResponse?.data?.user);
      setUserDetails([...userDetails, ...fetchMoreResponse?.data?.user]);
    } catch (err) {
      console.log("err", err);
    }
  };

  return {
    loadMore,
    userDetails,
    error,
    loading,
    hasMore,
  };
};

export default useUserDetails;
