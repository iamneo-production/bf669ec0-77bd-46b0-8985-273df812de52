package virtusa.team35.tarrif.admin;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Admin")
public class Admin {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String adminid;
	private String emailid;
	private String password;
	private String adminname;
	private int mobilenumber;
	private int active;
	private String role;
	
	
	public String getadminid() {
		return adminid;
	}
	public void setadminid(String adminid) {
		this.adminid = adminid;
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
	public String getadminname() {
		return adminname;
	}
	public void setadminname(String adminname) {
		this.adminname = adminname;
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

