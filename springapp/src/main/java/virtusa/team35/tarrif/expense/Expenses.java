package virtusa.team35.tarrif.expense;


import javax.persistence.Transient;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Expenses")
public class Expenses {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String expenseid;
	private String userid;
	private int billnumber;
	private int billcost;
	private LocalDate datedon;
	private String status;
	private String remark;
	@Transient
	private String date_str;
	
	public String getDate_str() {
		return date_str;
	}
	public void setDate_str(String date_str) {
		this.date_str = date_str;
	}	
	public String getExpenseid() {
		return expenseid;
	}
	public void setExpenseid(String expenseid) {
		this.expenseid = expenseid;
	}
	public String getuserid() {
		return userid;
	}
	public void setuserid(String userid) {
		this.userid = userid;
	}
	public int getBillnumber() {
		return billnumber;
	}
	public void setBillnumber(int billnumber) {
		this.billnumber = billnumber;
	}
	public int getBillcost() {
		return billcost;
	}
	public void setBillcost(int billcost) {
		this.billcost = billcost;
	}
	public LocalDate getDatedon() {
		return datedon;
	}
	public void setDatedon(LocalDate dated) {
		this.datedon = dated;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	
	
	
	
	
	

}

