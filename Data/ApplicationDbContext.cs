using Microsoft.EntityFramework;
using TrackingTicketSystem.Models;

public class ApplicationDbContext: DbContext
{
    public ApplicationDbContext(DbConextOptions<ApplicationDbContext> options)
    : base(options)
    {

    }
    public DbSet<Bug> Bugs { get; set;}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Customize the EF model here if needed
            // e.g., modelBuilder.Entity<YourEntity>().ToTable("YourTableName");
        }
}