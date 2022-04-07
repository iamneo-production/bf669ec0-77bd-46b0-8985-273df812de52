package virtusa.team35.tarrif.manager;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Manager")
public class Manager {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String managerid;
	private String emailid;
	private String password;
	private String managername;
	private int mobilenumber;
	private int active;
	private String role;
	
	
	public String getmanagerid() {
		return managerid;
	}
	public void setmanagerid(String managerid) {
		this.managerid = managerid;
	}
	public String getemailid() {
		return emailid;
	}
	public void setemailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getmanagername() {
		return managername;
	}
	public void setmanagername(String managername) {
		this.managername = managername;
	}
	public int getmobilenumber() {
		return mobilenumber;
	}
	public void setmobilenumber(int mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public int getActive() {
		return active;
	}
	public void setActive(int active) {
		this.active = active;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
}

