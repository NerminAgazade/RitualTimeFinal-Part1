using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RitualCore.Models
{
    public class Viseoapic
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }
        public bool IsFeatured { get; set; }
    }
}
