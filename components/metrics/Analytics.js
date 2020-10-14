import { HOST_URL } from "@/lib/constants";
import MetricCard from "./Card";
import React from "react";
import fetcher from "@/lib/fetcher";
import format from "comma-number";
import useSWR from "swr";

const Analytics = () => {
  const { data } = useSWR("/api/page-views", fetcher);

  const pageViews = format(data?.total);

  return (
    <MetricCard header="All-Time Views" link={HOST_URL} metric={pageViews} />
  );
};

export default Analytics;
