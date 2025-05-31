export type TableData = Record<string, any>;

export interface Company {
  id: string;
  name: string;
  sector: string;
  headquarters: string;
  stage: string;
  founded: string;
  employees: number;
  primary_investor_id: string;
  investor_name: string;
  investor_type: string;
}

export interface FilterOptions {
  key: string;
  label: string;
  options: string[];
}

export interface News {
  id: string;
  title: string;
  sector: string;
  source: string;
  company_id: string;
  company: {
    name: string;
  };
}
