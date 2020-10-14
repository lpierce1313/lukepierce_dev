import MetricCard from "./Card";
import React from "react";
import fetcher from "@/lib/fetcher";
import format from "comma-number";
import useSWR from "swr";

const Buttondown = () => {
  const { data } = useSWR("/api/subscribers", fetcher);

  const subscriberCount = format(data?.count);
  const link = "https://buttondown.email/leerob";

  return (
    <MetricCard
      header="Newsletter Subscribers"
      link={link}
      metric={subscriberCount}
    />
  );
};

export default Buttondown;
