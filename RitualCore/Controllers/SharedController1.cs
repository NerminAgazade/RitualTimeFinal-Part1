using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using RitualCore.Data;

namespace RitualCore.Controllers
{
    public class SharedController1 : Controller
    {
        private readonly ApplicationDbContext _context;
        private IWebHostEnvironment Environment;
        public SharedController1(ApplicationDbContext context, IWebHostEnvironment _environment)
        {
            Environment = _environment;
            _context = context;
        }
        [HttpPost]
        public JsonResult UploadPicture()
        {
            var picture = Request.Form.Files;
            JsonResult result = new JsonResult(new { });
            List<Object> picturesJson = new List<object>();
            for (int i = 0; i < picture.Count; i++)
            {
                var pistures = picture[i];
                var filename = Guid.NewGuid() + Path.GetExtension(picture.FileName);
                string uploadsFolder = Path.Combine(Environment.WebRootPath, "uploads");
                string filePath = Path.Combine(uploadsFolder, filename);
                using (var fileStream = new FileStream())
                {

                }
            }
            
            
            return result;
        }
    }
}
