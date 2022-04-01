package virtusa.team35.tarrif.user;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/")
public class UserApi {
	
	@Autowired
	private UserRepo userRepo;
	
	
//	@RequestMapping("/")
//	public String welcome(){
//		return "Welcome User";
//	}
	
	@GetMapping("/users")
	public Iterable<User> getUser(){
		return userRepo.findAll();
	}
	
	@GetMapping("/users/{id}")
	public User getTopic(@PathVariable String id) {
		return userRepo.findById(id).get();
	}
	
//	@GetMapping("/users/{id}")
	public String getName(@PathVariable String id) {
//		return userRepo.findById(id).get();
		User update = userRepo.findById(id).get();
		return update.getusername();
	}
	
	@PostMapping(value="/users")
	public void addTpoic(@RequestBody User user) {
		userRepo.save(user);
	}
	
	@PutMapping(value="/users/{id}")
	public void updateTpoic(@RequestBody User user, @PathVariable String id) {
		User update = userRepo.findById(id).get();
		update.setActive(user.getActive());
		update.setemailid(user.getemailid());
		update.setPassword(user.getPassword());
		update.setmobilenumber(user.getmobilenumber());
		update.setRole(user.getRole());
		update.setusername(user.getusername());
		userRepo.save(update);
	}
	
	@DeleteMapping(value="/users/{id}")
	public void deleteeTpoic(@PathVariable String id) {
		userRepo.deleteById(id);
//		userRepo.delete(delete);
	}
}

