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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class ExpensesApi {
	
	@Autowired
	private ExpensesRepo expRepo;
	
	
//	@RequestMapping("/"
//	public String welcome(){
//		return "Welcome User"
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
		System.out.println("image: "+exp.getBillimage());
		expRepo.save(exp);
	}
	
	@PutMapping(value="/expense/{id}")
	public void updateTpoic(@RequestBody Expenses user, @PathVariable String id) {
		System.out.println("date"+user.getDate_str());
		Expenses update = expRepo.findById(id).get();
		System.out.println("date"+user.getDate_str());
		update.setBillcost(user.getBillcost());
		update.setBillnumber(user.getBillnumber());
		update.setUserid(user.getUserid());
		
		LocalDate dated = LocalDate.parse(user.getDate_str());
		update.setDatedon(dated);
		update.setRemark(user.getRemark());
		update.setStatus(user.getStatus());
		expRepo.save(update);
	}
	
	@DeleteMapping(value="/expense/{id}")
	public void deleteeTpoic(@PathVariable String id) {
		System.out.println(id);
		expRepo.deleteById(id);
	}
}




//
//import java.io.IOException;
//import java.time.LocalDate;
//import java.util.Base64;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
////import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;
//
//
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/")
//public class ExpensesApi {
//	
//	@Autowired
//	private ExpensesRepo expRepo;
//	
//	
////	@RequestMapping("/")
////	public String welcome(){
////		return "Welcome User";
////	}
//	
//	@GetMapping("/expense")
//	public Iterable<Expenses> getUser(){
//		return expRepo.findAll();
//	}
//	
//	@GetMapping("/expense/{id}")
//	public Expenses getTopic(@PathVariable String id) {
//		return expRepo.findById(id).get();
//	}
//
//	@PostMapping(value="/expense")
//	public void addTpoic(
//			@RequestParam("billnumber")int billnumber,
//			@RequestParam("billcost")int billcost,
//			@RequestParam("expenseid")String expenseid,
//			@RequestParam("userid")String userid, 
//			@RequestParam("status")String status, 
//			@RequestParam("remark")String remark, 
//			@RequestParam("datedon")LocalDate datedon) {
//		//MultipartFile file = null;
//		//try {
//			Expenses expenses = new Expenses();
//			expenses.setBillnumber(expenses.getBillnumber());
//			expenses.setExpenseid(expenses.getExpenseid());
//			expenses.setuserid(expenses.getuserid());
//			expenses.setDatedon(expenses.getDatedon());
//			expenses.setBillcost(expenses.getBillcost());
//			expenses.setStatus(expenses.getStatus());
//			expenses.setRemark(expenses.getRemark());
//			//expenses.setBillImage(Base64.getEncoder().encodeToString(file.getBytes()));
//			expRepo.save(expenses);
//		//} catch (IOException e) {
//			//e.printStackTrace();
//		//}
//		
//	
//	}
//	
//	@PutMapping(value="/expense/{id}")
//	public void updateTpoic(@PathVariable String id,
//			@RequestParam("billimage")MultipartFile file,
//			@RequestParam("billnumber")int billnumber,
//			@RequestParam("billcost")int billcost,
//			@RequestParam("expenseid")String expenseid,
//			@RequestParam("userid")String userid, 
//			@RequestParam("status")String status, 
//			@RequestParam("remark")String remark, 
//			@RequestParam("datedon")LocalDate datedon) throws IOException {
//		
//		try {
//			Expenses expenses = new Expenses();
//			expenses.setBillnumber(expenses.getBillnumber());
//			expenses.setExpenseid(expenses.getExpenseid());
//			expenses.setuserid(expenses.getuserid());
//			expenses.setDatedon(expenses.getDatedon());
//			expenses.setBillcost(expenses.getBillcost());
//			expenses.setStatus(expenses.getStatus());
//			expenses.setRemark(expenses.getRemark());
//			expenses.setBillImage(Base64.getEncoder().encodeToString(file.getBytes()));
//			expRepo.save(expenses);
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		
//	}
//	
//	@DeleteMapping(value="/expense/{id}")
//	public void deleteeTpoic(@PathVariable String id) {
//		Expenses delete = expRepo.findById(id).get();
//		expRepo.delete(delete);
//	}
//	
//	  public static String uploadDirectory = System.getProperty("user.dir")+"/uploads";
//	  @RequestMapping("/")
//	  public String UploadPage(Model model) {
//		  return "uploadview";
//	  }
//}