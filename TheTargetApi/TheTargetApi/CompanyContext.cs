using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using TheTargetApi.Models;

namespace TheTargetApi
{
    public class CompanyContext: DbContext
    {
        public CompanyContext(): base("name=TargetCompanyContext")
        {
        }

        public DbSet<TargetCompany> TargetCompanies { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<FinancePeriod> FinancePeriods { get; set; }
    }
}