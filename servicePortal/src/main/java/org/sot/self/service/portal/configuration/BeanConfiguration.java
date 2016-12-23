package org.sot.self.service.portal.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {

	@Bean
	public BasicAuthorizationFilter getFilter() {
		return new BasicAuthorizationFilter();
	}
}
