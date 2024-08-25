import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type SalesReportWhereInput = {
  date?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  file?: JsonFilter;
  id?: StringFilter;
};
