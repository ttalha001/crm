import { Employee } from "../employee/Employee";
import { JsonValue } from "type-fest";

export type SalesReport = {
  createdAt: Date;
  date: Date | null;
  employee?: Employee | null;
  file: JsonValue;
  id: string;
  updatedAt: Date;
};
