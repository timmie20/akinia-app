import { getCompanies, getCompaniesFilterOptions } from "@/sevices/companies";
import Client from "./client";

export const Companies = async () => {
  const companies = await getCompanies();
  const filterOptions = await getCompaniesFilterOptions();

  if (companies.success && filterOptions.success)
    return <Client data={companies.data} filters={filterOptions.data} />;
};
