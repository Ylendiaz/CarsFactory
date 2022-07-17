using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CarsFactoryWebAPI.Data;
using CarsFactoryWebAPI.Models;

namespace CarsFactoryWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsTablesController : ControllerBase
    {
        private readonly CatalogCarsContext _context;

        public CarsTablesController(CatalogCarsContext context)
        {
            _context = context;
        }

        // GET: api/CarsTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarsTable>>> GetCarsTable()
        {
          if (_context.CarsTable == null)
          {
              return NotFound();
          }
            return await _context.CarsTable.ToListAsync();
        }

        // GET: api/CarsTables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CarsTable>> GetCarsTable(int id)
        {
          if (_context.CarsTable == null)
          {
              return NotFound();
          }
            var carsTable = await _context.CarsTable.FindAsync(id);

            if (carsTable == null)
            {
                return NotFound();
            }

            return carsTable;
        }

        // PUT: api/CarsTables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCarsTable(int id, CarsTable carsTable)
        {
            if (id != carsTable.IdCar)
            {
                return BadRequest();
            }

            _context.Entry(carsTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarsTableExists(id))
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

        // POST: api/CarsTables
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CarsTable>> PostCarsTable(CarsTable carsTable)
        {
          if (_context.CarsTable == null)
          {
              return Problem("Entity set 'CatalogCarsContext.CarsTable'  is null.");
          }
            _context.CarsTable.Add(carsTable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCarsTable", new { id = carsTable.IdCar }, carsTable);
        }

        // DELETE: api/CarsTables/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCarsTable(int id)
        {
            if (_context.CarsTable == null)
            {
                return NotFound();
            }
            var carsTable = await _context.CarsTable.FindAsync(id);
            if (carsTable == null)
            {
                return NotFound();
            }

            _context.CarsTable.Remove(carsTable);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CarsTableExists(int id)
        {
            return (_context.CarsTable?.Any(e => e.IdCar == id)).GetValueOrDefault();
        }
    }
}
