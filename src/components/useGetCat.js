import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const useGetCat = () => {
  const fetchData = async () => {
    const res = await Axios.get("https://catfact.ninja/fact");
    return res.data;
  };

  const {
    data,
    refetch,
    isLoading: isCatLoading,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: fetchData,
  });
  const refetchData = () => {
    alert("DATA REFETCHED");
    refetch();
  };

  return { data, refetchData, isCatLoading };
};

export default useGetCat;
