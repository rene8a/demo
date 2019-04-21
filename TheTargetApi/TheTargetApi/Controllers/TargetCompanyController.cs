using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TheTargetApi.Models;

namespace TheTargetApi.Controllers
{
    public class TargetCompanyController : ApiController
    {
        private CompanyContext db = new CompanyContext();

        [HttpGet]
        public List<TargetCompany> GetAllTargetCompanies()
        {
            return db.TargetCompanies
                .Include(c => c.TargetCompanyContacts.Select(cr => cr.TargetCompany))
                .Include(f => f.TargetCompanyFinancialPeriods.Select(cf => cf.TargetCompany))
                .ToList();
        }

        [HttpGet]
        public TargetCompany GetAllTargetCompanies(int id)
        {
            return db.TargetCompanies
                .Include(c => c.TargetCompanyContacts.Select(cr => cr.TargetCompany))
                .Include(f => f.TargetCompanyFinancialPeriods.Select(cf => cf.TargetCompany))
                .Where(x=> x.Id == id).FirstOrDefault();
        }

        [HttpPost]
        public IHttpActionResult PostTargetCompany(TargetCompany targetCompany)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TargetCompanies.Add(targetCompany);
            if(db.SaveChanges() > 0)
            {
                return Ok();
            }
            else
            {
                return InternalServerError();
            }
        }

        [HttpPut]
        public IHttpActionResult PutTargetCompany(int id, TargetCompany targetCompany)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
 
            if (id != targetCompany.Id)
            {
                return BadRequest();
            }
            // TargetCompany Entity
            db.Entry(targetCompany).State = EntityState.Modified;
            // Contact Entities from TargetCompany
            targetCompany.TargetCompanyContacts.ToList().ForEach(contact =>
            {
                db.Entry(contact).State = EntityState.Modified;
            });
            // FinancePeriod Entities from TargetCompany
            targetCompany.TargetCompanyFinancialPeriods.ToList().ForEach(financePeriod =>
            {
                db.Entry(financePeriod).State = EntityState.Modified;
            });
 
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TargetCompanyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
 
            return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpDelete]
        public IHttpActionResult DeleteTargetCompany([FromUri] int[] id)
        {
            // If one of the keys does not exist return notfound result
            foreach(var key in id)
            {
                if(!TargetCompanyExists(key))
                {
                    return NotFound();
                }
            }
            foreach(var key in id) {
                TargetCompany targetCompany = db.TargetCompanies
                .Include(c => c.TargetCompanyContacts.Select(cr => cr.TargetCompany))
                .Include(f => f.TargetCompanyFinancialPeriods.Select(cf => cf.TargetCompany))
                .Where(x=> x.Id == key).FirstOrDefault();
                db.TargetCompanies.Remove(targetCompany);
            }
            db.SaveChanges();
            return Ok();
        }

        private bool TargetCompanyExists(int id)
        {
            return db.TargetCompanies.Count(e => e.Id == id) > 0;
        }
    }
}
