"use client";

import { useEffect, useState } from "react";

interface CurrencyProps {
  price: string;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Currency: React.FC<CurrencyProps> = ({ price }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <div className="font-semibold">{formatter.format(Number(price))}</div>;
};

export default Currency;
