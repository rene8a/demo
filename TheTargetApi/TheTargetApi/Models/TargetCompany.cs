using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheTargetApi.Models
{
    public class TargetCompany
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string Phone { get; set; }
        public string Website { get; set; }
        public string Status { get; set; }
        public string StatusSummary { get; set; }
        public string FinanceSummary { get; set; }

        public ICollection<Contact> TargetCompanyContacts { get; set; }
        public ICollection<FinancePeriod> TargetCompanyFinancialPeriods { get; set; }

    }
}