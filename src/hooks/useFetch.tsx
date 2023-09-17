export const useFetch = async (url: string) => {
  const data = await fetch(import.meta.env.VITE_BASE_URL + url,{
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return data;
};
