using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RitualCore.Models
{
    public class VideoPicture
    {
        public int Id { get; set; }
        public int VideoId { get; set; }
        public int PictureId { get; set; }
        public virtual Picture Picture { get; set; }
    }
}
