import { useState, useEffect } from "react";
import team from "../data/team";

export function useTeam() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(team);
  }, []);

  return data;
}