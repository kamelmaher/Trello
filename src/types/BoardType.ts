/** @format */

import { General } from "./General";

export type BoardType = {
  id: string;
  title: string;
  columns: General[];
  tasks: General[];
};
