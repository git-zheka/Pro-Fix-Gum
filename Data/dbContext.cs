using Microsoft.EntityFrameworkCore;
using ProFixGum.Models;

namespace ProFixGum.Data
{
    public class dbContext : DbContext
    {
        public dbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
