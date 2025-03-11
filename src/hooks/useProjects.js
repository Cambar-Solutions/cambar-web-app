import { useState, useEffect } from "react";
import projects from "../data/projects";

export function useProjects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projects);
  }, []);

  return data;
}
