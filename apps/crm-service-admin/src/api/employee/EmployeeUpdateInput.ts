import { SalesReportUpdateManyWithoutEmployeesInput } from "./SalesReportUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  email?: string | null;
  name?: string | null;
  role?: string | null;
  salesReports?: SalesReportUpdateManyWithoutEmployeesInput;
};
