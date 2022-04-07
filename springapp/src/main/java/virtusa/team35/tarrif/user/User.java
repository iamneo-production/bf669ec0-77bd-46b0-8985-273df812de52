package virtusa.team35.tarrif.user;


import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Id;
//import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class User {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String userid;
	private String emailid;
	private String password;
	private String username;
	private int mobilenumber;
	private int active;
	private String role;
	
	@ManyToMany
//    @JoinTable(
//        schema = "HR",
//        name = "Expenses",
//        joinColumns = {@JoinColumn(table = "Expenses", name = "userid", insertable = false, updatable = false)},
//        inverseJoinColumns = {@JoinColumn(table = "Users", name = "userid", insertable = false, updatable = false)}
//    )
//    @WhereJoinTable(clause = "GROUP_ACTIVE='Y'")
    private List<User> group;
	
	
	public String getuserid() {
		return userid;
	}
	public void setuserid(String userid) {
		this.userid = userid;
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
	public String getusername() {
		return username;
	}
	public void setusername(String username) {
		this.username = username;
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

