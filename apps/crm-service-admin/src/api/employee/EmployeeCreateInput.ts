import { SalesReportCreateNestedManyWithoutEmployeesInput } from "./SalesReportCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  email?: string | null;
  name?: string | null;
  role?: string | null;
  salesReports?: SalesReportCreateNestedManyWithoutEmployeesInput;
};
