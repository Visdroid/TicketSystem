using Microsoft.EntityFramework;
using TrackingTicketSystem.Models;

public class ApplicationDbContext: DbContext
{
    public ApplicationDbContext(DbConextOptions<ApplicationDbContext> options)
    : base(options)
    {

    }
    public DbSet<Bug> Bugs { get; set;}
}