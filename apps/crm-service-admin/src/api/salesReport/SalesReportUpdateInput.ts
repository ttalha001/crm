import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type SalesReportUpdateInput = {
  date?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  file?: InputJsonValue;
};
