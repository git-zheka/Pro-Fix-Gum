using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProFixGum.Data;
using ProFixGum.Models;

namespace ProFixGum.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : Controller
    {

        private readonly dbContext _context;
        public OrderController(dbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetOrders()
        {
            var orders = await _context.Orders.ToListAsync();
            return Ok(orders);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Order order)
        {
            if (id != order.Id)
            {
                return BadRequest();
            }

            var existingOrder = await _context.Orders.FindAsync(id);
            if (existingOrder == null)
            {
                return NotFound();
            }
            existingOrder = order;

            try
            {
                await _context.SaveChangesAsync();
                return Ok(existingOrder);
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }




    }
}
