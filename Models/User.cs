namespace ProFixGum.Models
{
    public class User
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public string ZIP { get; set; }
        public string City { get; set; }
        public string Root { get; set; }
    }

    public enum root
    {
        User,
        Admin
    }
}
