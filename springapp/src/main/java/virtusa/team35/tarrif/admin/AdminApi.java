package virtusa.team35.tarrif.admin;



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
public class AdminApi {
	
	@Autowired
	private AdminRepo adminRepo;
	
	
//	@RequestMapping("/")
//	public String welcome(){
//		return "Welcome admin";
//	}
	
	@GetMapping("/admin")
	public Iterable<Admin> getUser(){
		return adminRepo.findAll();
	}
	
	@GetMapping("/admin/expense/{id}")
	public Admin getTopic(@PathVariable String id) {
		return adminRepo.findById(id).get();
	}
	
	@PostMapping(value="/admin")
	public void addTpoic(@RequestBody Admin admin) {
		adminRepo.save(admin);
	}
	
	@PutMapping(value="/admin/expense/{id}")
	public void updateTpoic(@RequestBody Admin user, @PathVariable String id) {
		Admin update = adminRepo.findById(id).get();
		update.setActive(user.getActive());
		update.setemailid(user.getemailid());
		update.setPassword(user.getPassword());
		update.setmobilenumber(user.getmobilenumber());
		update.setRole(user.getRole());
		update.setadminname(user.getadminname());
		adminRepo.save(update);
	}
	
	@DeleteMapping(value="/admin/expense/{id}")
	public void deleteTpoic(@PathVariable String id) {
		adminRepo.deleteById(id);
	}
}

