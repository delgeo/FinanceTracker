using Microsoft.EntityFrameworkCore;
using FinanceTracker.Server.Models;

namespace FinanceTracker.Server.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Transaction> Transactions { get; set; }
}