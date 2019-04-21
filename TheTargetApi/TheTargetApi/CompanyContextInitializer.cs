using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using TheTargetApi.Models;

namespace TheTargetApi
{
    public class CompanyContextInitializer: CreateDatabaseIfNotExists<CompanyContext>
    {
        protected override void Seed(CompanyContext context)
        {
            var targetCompany = new List<TargetCompany>()            
            {
                new TargetCompany() { Name = "The awesome IT Company", Address = "5432 Blvd. Racoon", State = "Georgia", City = "Alpharetta", Phone = "404-123-1234", PostalCode="67543", Website="www.theawesomeit.com", Status="Researching", StatusSummary="Getting information from stable clients", FinanceSummary= "Company stable" },
                new TargetCompany() { Name = "The Dev World", Address = "6753 Main Street", State = "California", City = "Sacramento", Phone = "405-123-1234", PostalCode="50921", Website="www.thedevworld.com", Status="Approved", StatusSummary="Approved, Signing papers May 25th 2019", FinanceSummary= "Revenues of company has increased more than 15 % each year" },
                new TargetCompany() { Name = "Dev Land", Address = "56742 GI Joe Ave", State = "Florida", City = "Miami", Phone = "406-123-1234", PostalCode="67812", Website="www.devland.com", Status="Researching", StatusSummary="Very difficult to schedule client with CEO", FinanceSummary= "Revenues does not seems to be completed" }
            };

            targetCompany.ForEach(c => context.TargetCompanies.Add(c));
            context.SaveChanges();

            var od = new List<Contact>()
            {
                new Contact() { FullName = "Michael Gibs", Phone= "404-543-4321", Email = "michael@theawesomeCompany.com", TargetCompany = targetCompany[0] },
                new Contact() { FullName = "Robert Ronald", Phone= "404-743-8322", Email = "robert@theawesomeCompany.com", TargetCompany = targetCompany[0] },
                new Contact() { FullName = "Samantha Gibs", Phone= "404-543-1135", Email = "michael@thedevworld.com", TargetCompany = targetCompany[1] },
                new Contact() { FullName = "John Sordon", Phone= "404-312-4321", Email = "robert@thedevworld.com", TargetCompany = targetCompany[1] },
                new Contact() { FullName = "Ash Ketchup", Phone= "404-514-0092", Email = "michael@devland.com", TargetCompany = targetCompany[2] },
                new Contact() { FullName = "Richard Bool", Phone= "404-927-5432", Email = "robert@devland.com", TargetCompany = targetCompany[2] },
            };
            od.ForEach(c => context.Contacts.Add(c));
            context.SaveChanges();

            var fp = new List<FinancePeriod>()
            {
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2015", Amount = 3224000, TargetCompany = targetCompany[0] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2016", Amount = 5424000, TargetCompany = targetCompany[0] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2017", Amount = 7522000, TargetCompany = targetCompany[0] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2018", Amount = 9221000, TargetCompany = targetCompany[0] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2019", Amount = 2387334, TargetCompany = targetCompany[0] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2015", Amount = 1298731, TargetCompany = targetCompany[1] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2016", Amount = 6381231, TargetCompany = targetCompany[1] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2017", Amount = 6989889, TargetCompany = targetCompany[1] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2018", Amount = 7987872, TargetCompany = targetCompany[1] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2019", Amount = 6123123, TargetCompany = targetCompany[1] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2015", Amount = 9812312, TargetCompany = targetCompany[2] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2016", Amount = 9123123, TargetCompany = targetCompany[2] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2017", Amount = 5781233, TargetCompany = targetCompany[2] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2018", Amount = 8766214, TargetCompany = targetCompany[2] },
                new FinancePeriod() { PeriodType = "Year", PeriodValue = "2019", Amount = 7131123, TargetCompany = targetCompany[2] },  
            };
            fp.ForEach(f => context.FinancePeriods.Add(f));
            context.SaveChanges();
        }
    }
}