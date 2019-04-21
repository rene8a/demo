import { Contact } from './contact';
import { FinancePeriod } from './finance-period';
export interface TargetCompany {
  id?: number;
  name: string;
  address?: string;
  phone?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  website?: string;
  status?: string;
  statusSummary?: string;
  financeSummary?: string;
  targetCompanyContacts?: Contact[];
  targetCompanyFinancialPeriods?: FinancePeriod[];
}
