using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RitualCore.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual Picture Pictures { get; set; }
        public virtual List<Viseoapic> Viseoapics  { get; set; }
    }
}
