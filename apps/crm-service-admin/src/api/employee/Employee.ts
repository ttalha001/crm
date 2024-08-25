import { SalesReport } from "../salesReport/SalesReport";

export type Employee = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  role: string | null;
  salesReports?: Array<SalesReport>;
  updatedAt: Date;
};
