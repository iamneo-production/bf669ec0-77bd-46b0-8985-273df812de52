package virtusa.team35.tarrif.manager;



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
public class ManagerApi {
	
	@Autowired
	private ManagerRepo managerRepo;
	
	
//	@RequestMapping("/")
//	public String welcome(){
//		return "Welcome Manager";
//	}
	
	@GetMapping("/manager")
	public Iterable<Manager> getUser(){
		return managerRepo.findAll();
	}
	
	@GetMapping("/manager/expense/{id}")
	public Manager getTopic(@PathVariable String id) {
		return managerRepo.findById(id).get();
	}
	
	@PostMapping(value="/managers")
	public void addTpoic(@RequestBody Manager manager) {
		managerRepo.save(manager);
	}
	
	@PutMapping(value="/managers/expense/{id}")
	public void updateTpoic(@RequestBody Manager user, @PathVariable String id) {
		Manager update = managerRepo.findById(id).get();
		update.setActive(user.getActive());
		update.setemailid(user.getemailid());
		update.setPassword(user.getPassword());
		update.setmobilenumber(user.getmobilenumber());
		update.setRole(user.getRole());
		update.setmanagername(user.getmanagername());
		managerRepo.save(update);
	}
	
	@DeleteMapping(value="/managers/expense/{id}")
	public void deleteeTpoic(@PathVariable String id) {
		Manager delete = managerRepo.findById(id).get();
		managerRepo.delete(delete);
	}
}

