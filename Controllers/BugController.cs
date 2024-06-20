using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicketTrackingSystem.Models;

namespace TicketTrackingSystem.controllers
{
    [ApiController]
    [Route("api/controller")]
    public class BugController: controllerBase
    {
        private readonly ApplicationDbContext _context;
        public BugController(ApplicationDbContext context){
            _context = context;
        }

        //GET: api/Bug
        [HttpGet]
        public async Task(<ActionResult<IEnumerable<Bug>>> GetBugs())
        {
            return await _context.Bugs.ToListAsync();
        }

        //GET: api/Bug/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bug>> GetBug(int id)
        {
            var bug = await _context.Bugs.FindAsync(id);

            if(bug == null)
            {
                return NotFound();
            }
            return bug;
        }


        //POST: api/Bug
        [HttpPost]
        [Authorize(Roles = "QA")]
        public async Task<ActionResult<Bug>> PostBug(Bug bug)
        {
            if(string.IsNullOrEmpty(bug.Summary)|| string.IsNullOrEmpty(bug.Description)){
                return BadRequest("Summary and Description are required.")
            }
            _contect.Bugs.Add(bug);
            await _context.SaveChangesAsync();

            return CreatedAction(nameof(GetBug), new {id = bug.Id}, bug)
        }

        //PUT: api/Bug/5
        [HttpPut("{id}")]
        [Authorize(Roles = "QA")]
        public async Task<ActionResult<Bug>> PostBug(Bug bug)
        {
            if(id != bug.Id)
            {
                return BadRequest();
            }
            if(string.IsNullOrEmpty(bug.summary)|| string.IsNullOrEmpty(bug.Description))
            {
                return BadRequest("Summary and Description are required.");
            }
            _context.Entry(bug).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
               if(!BugExists(id))
               {
                return NotFound();
               } 
               else{
                throw;
               }
                
            }
            return NoContent();
        }
        
        //DELETE: api/Bug/2
        [HttpDelete("{id}")]
        [Authorize(Roles = "QA")]
        public async Task<IActionResult> DeleteBug(int id)
        {
            var bug = await _context.Bugs.FindAsync(id);
            if(bug == null)
            {
                return NotFound();
            }
            _context.Bugs.Remove(bug);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        
        [HttpPatch("{id}/resolve")]
        [Authorize(Roles = "RD")]
        public async Task<IActionResult> ResolveBug(int id)
        {
            var bug = await _context.Bugs.FindAsync(id);
            if(bug == null)
            {
                return NoContent();
            }
            bug.IsResolved = true;
            _context.Entry(bug).State = EntityState.Modified
            try
            {
                await _context.SaveChangesAsync();
            }catch
            {
                if(!BugExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }
        private bool BugExists(int id)
        {
            return _context.Bugs.Any(e => e.Id == id);
        }
    }
}