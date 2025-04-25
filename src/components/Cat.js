import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";
import useGetCat from "./useGetCat";

const Cat = () => {
  const { data, refetchData, isCatLoading } = useGetCat();
  if (isCatLoading) {
    return <h1> loading...</h1>;
  }

  return (
    <div>
      <button onClick={refetchData}>Refetch</button>
      <h1>{data?.fact}</h1>
    </div>
  );
};

export default Cat;
