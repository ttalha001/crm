import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SalesReportListRelationFilter } from "../salesReport/SalesReportListRelationFilter";

export type EmployeeWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  salesReports?: SalesReportListRelationFilter;
};
