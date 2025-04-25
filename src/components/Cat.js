import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";
import useGetCat from "./useGetCat";

const Cat = () => {
  // This is from the ep10 Home.js reactQuery - use this to build useGetCat custom hook
  const fetchData = async () => {
    const response = await Axios.get("https://catfact.ninja/fact");
    console.log(response.data);
    return response.data;
  };

  const {
    catData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: fetchData,
  });

    const { data, refetchData, isCatLoading } = useGetCat();
    if (isCatLoading) {
      return <h1> loading...</h1>;
    }

  return (
    <div>
      <button onClick={refetchData}>Refetch</button>
      <h1>{data?.fact}</h1>
      <h1>{catData?.fact}</h1>
    </div>
  );
};

export default Cat;
