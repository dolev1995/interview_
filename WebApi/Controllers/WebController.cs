using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebController : ControllerBase
    {
        private static List<User> users = new List<User>
            {
                new User {Id=1122, UserName = "avi" , Password = "1111"}
            };
        private readonly DataContext _context;

        public WebController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {

            return Ok(await _context.Users.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Get(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return BadRequest("User not found");
            return Ok(user);
        }
        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User a)
        {
            if(a.Id < 4)

            _context.Users.Add(a);
            await _context.SaveChangesAsync();
            return Ok(await _context .Users.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateUser(User a)
        {
            int length = (int)Math.Floor(Math.Log10(a.Id) + 1);
            if(length < 3)
            {
                throw new Exception("the id is shorted");
            }
            var user = await _context.Users.FindAsync(a.Id); 
            if (user == null)
                return BadRequest("User not found");

            user.Id = a.Id;
            user.Password = a.Password;
            user.UserName = a.UserName;

            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }
    }
}