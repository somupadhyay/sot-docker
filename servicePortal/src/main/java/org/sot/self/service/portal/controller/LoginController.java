/**
 * 
 */
package org.sot.self.service.portal.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.sot.self.service.portal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * @author Somnath Upadhyay
 *
 */
@RestController
@RequestMapping("/users")
public class LoginController {

	private static final Logger LOG = LoggerFactory.getLogger(LoginController.class);
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(path="/auth", method=RequestMethod.GET)
	public ResponseEntity<String> authenticatedUser(HttpServletRequest request) throws JsonProcessingException{
		LOG.trace("Starting to process login request.");
		String email = request.getHeader("mail");
		email = "somnath.upadhyay2@emc.com";
		if (email != null) {
			ObjectMapper mapper = new ObjectMapper();
			Map<String, String> userDetail = userService.authenticatedUser(email);
			if (userDetail != null) {
				return new ResponseEntity<String>(
						mapper.writeValueAsString(userDetail), HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("user not authorized", HttpStatus.UNAUTHORIZED);
			}
		} else {
			return new ResponseEntity<String>("user not authorized",
					HttpStatus.UNAUTHORIZED);
		}
	}
}
