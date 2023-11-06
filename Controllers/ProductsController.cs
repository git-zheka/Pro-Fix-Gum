using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProFixGum.Data;
using ProFixGum.Models;

namespace ProFixGum.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly dbContext _context;
        public ProductsController(dbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var customers = await _context.Products.ToListAsync();
            return Ok(customers);
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var customers = await _context.Products.FindAsync(id);
            if (customers == null)
            {
                return NotFound();
            }

            return Ok(customers);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var customers = await _context.Products.FindAsync(id);
            if (customers == null)
            {
                return NotFound();
            }

            _context.Products.Remove(customers);
            await _context.SaveChangesAsync();

            return Ok(customers);
        }

        [HttpPost]
        public async Task<IActionResult> AddCustomers([FromBody] Product products)
        {
            if (ModelState.IsValid)
            {
                await _context.Products.AddAsync(products);
                await _context.SaveChangesAsync();
                return Ok(products);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }



        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, [FromBody] Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            var existingProduct = await _context.Products.FindAsync(id);
            if (existingProduct == null)
            {
                return NotFound();
            }

            existingProduct.Name = product.Name;
            existingProduct.Description = product.Description;
            existingProduct.Price = product.Price;
            existingProduct.ImageUrl = product.ImageUrl;
            existingProduct.ModelUrl = product.ModelUrl;

            try
            {
                await _context.SaveChangesAsync();
                return Ok(existingProduct);
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }


    }
}

