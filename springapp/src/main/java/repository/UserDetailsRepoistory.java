package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.User;

@Repository
public interface UserDetailsRepository extends JpaRepository<User, Long> {
	
	User findByUserName(String userName);

}
