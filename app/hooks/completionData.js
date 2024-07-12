// hooks/useCompletionData.js
import { useEffect, useState } from "react";

export const useCompletionData = () => {
  const [dates, setDates] = useState([]);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completionLog = JSON.parse(localStorage.getItem("completionLog")) || {};
      console.log(completionLog)
      const sortedDates = Object.keys(completionLog).sort(); // Sort dates for correct order
      const sortedCounts = sortedDates.map(date => completionLog[date]);

      setDates(sortedDates);
      setCounts(sortedCounts);
    }
  }, []);

  return { dates, counts };
};
