using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProFixGum.Data;

namespace ProFixGum.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {

        private readonly dbContext _context;
        public UserController(dbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {

            var users = await _context.Users
                                       .Where(user => user.Root == user.Root)
                                       .ToListAsync();

            return Ok(users);
        }

    }
}
