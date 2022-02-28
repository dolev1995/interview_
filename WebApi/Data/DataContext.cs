using Microsoft.EntityFrameworkCore;
using WebApi.Controllers;

namespace WebApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }

    }
}
