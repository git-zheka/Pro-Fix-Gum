using System.Collections;

namespace ProFixGum.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string UserID { get; set; }
        public DateTime DataTime { get; set; }
        public int IDProduct { get; set; }
        public int Count { get; set; }
        public string Status { get; set; }
    }
}

public enum state {
    Created,
    Confirmed,
    InProcess,
    Shipped,
    Delivered,
    Completed
}
