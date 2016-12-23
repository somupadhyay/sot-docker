package org.sot.self.service.portal.configuration;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.Base64Utils;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;

public class BasicAuthorizationFilter extends ZuulFilter {
	@Value("${jenkins.credentials}")
	private String jenkinsCredentials;

	private static final Logger LOGGER = LogManager
			.getLogger(BasicAuthorizationFilter.class);

	@Override
	public Object run() {
		LOGGER.trace("zuul filter: received request.");
		RequestContext ctx = RequestContext.getCurrentContext();
		if (ctx.getRequest().getRequestURL().toString().contains("jenkins"))  {
			ctx.addZuulRequestHeader(
					"Authorization",
					"Basic "
							+ Base64Utils.encodeToString(jenkinsCredentials.getBytes()));
		}

		return null;
	}

	@Override
	public boolean shouldFilter() {
		return true;
	}

	@Override
	public int filterOrder() {
		return 10;
	}

	@Override
	public String filterType() {
		return "pre";
	}

}
