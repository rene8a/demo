using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheTargetApi.Models
{
    public class FinancePeriod
    {
        public int Id { get; set; }
        public string PeriodType { get; set; }
        public string PeriodValue { get; set; }
        public long Amount { get; set; }

        public TargetCompany TargetCompany { get; set; }
    }
}