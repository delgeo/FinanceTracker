namespace FinanceTracker.Server.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public string Category { get; set; } = "General"; // Food, Rent, Salary etc.
        public DateTime Date { get; set; } = DateTime.UtcNow;

        // Advanced Features
        public bool IsRecurring { get; set; } = false;
        public string? RecurrenceInterval { get; set; } // "Monthly", "Weekly"
    }
}
