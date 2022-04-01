package virtusa.team35.tarrif.expense;

import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class ExpensesApi {
	
	@Autowired
	private ExpensesRepo expRepo;
	
	
//	@RequestMapping("/")
//	public String welcome(){
//		return "Welcome User";
//	}
	
	@GetMapping("/expense")
	public Iterable<Expenses> getUser(){
		return expRepo.findAll();
	}
	
	@GetMapping("/expense/{id}")
	public Expenses getTopic(@PathVariable String id) {
		return expRepo.findById(id).get();
	}
	
	@PostMapping(value="/expense")
	public void addTpoic(@RequestBody Expenses exp) {
		expRepo.save(exp);
	}
	
	@PutMapping(value="/expense/{id}")
	public void updateTpoic(@RequestBody Expenses user, @PathVariable String id) {
		Expenses update = expRepo.findById(id).get();
		update.setBillcost(user.getBillcost());
		update.setBillnumber(user.getBillnumber());
		update.setuserid(user.getuserid());
		LocalDate dated = LocalDate.parse(user.getDate_str());
		update.setDatedon(dated);
		update.setRemark(user.getRemark());
		update.setStatus(user.getStatus());
		expRepo.save(update);
	}
	
	@DeleteMapping(value="/expense/{id}")
	public void deleteeTpoic(@PathVariable String id) {
		Expenses delete = expRepo.findById(id).get();
		expRepo.delete(delete);
	}
}

