/**
 * 
 */
package org.sot.self.service.portal.service;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * @author Somnath Upadhyay
 *
 */
@Service("userService")
public class UserService {

	private static final Logger LOG = LoggerFactory.getLogger(UserService.class);
	
	public Map<String, String> authenticatedUser(String mail){
		LOG.debug("Check if the user is authenticated or not:");
		Map<String, String> authenticatedUser = new HashMap<>();
		authenticatedUser.put("fname", "Somnath");
		authenticatedUser.put("lname", "Upadhyay");
		authenticatedUser.put("email", mail);
		authenticatedUser.put("authorized", "true");
		return authenticatedUser;
	}
	
}
