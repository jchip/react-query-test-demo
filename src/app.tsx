import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

export const TestComp = () => {
  const { data = {} as any } = useQuery("test", async ({ queryKey }) => {
    return { msg: "hello, world", queryKey };
  });

  return (
    <div>
      {data.msg} <p>{data.queryKey}</p>
    </div>
  );
};

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TestComp />
    </QueryClientProvider>
  );
};
