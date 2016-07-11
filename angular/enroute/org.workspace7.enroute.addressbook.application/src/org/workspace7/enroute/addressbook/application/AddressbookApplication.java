package org.workspace7.enroute.addressbook.application;

import org.osgi.service.component.annotations.Component;
import org.workspace7.enroute.addressbook.core.webresource.capabilities.RequireAddressBookCoreWebResource;
import org.workspace7.enroute.addressbook.person.details.webresource.capabilities.RequirePersonDetailsWebResource;
import org.workspace7.enroute.addressbook.person.list.webresource.capabilities.RequirePersonListWebResource;
import org.workspace7.enroute.angular.webresource.capabilities.RequireAngularWebResource;

import osgi.enroute.configurer.api.RequireConfigurerExtender;
import osgi.enroute.rest.api.REST;
import osgi.enroute.twitter.bootstrap.capabilities.RequireBootstrapWebResource;
import osgi.enroute.webserver.capabilities.RequireWebServerExtender;

@RequireAngularWebResource(resource={"angular.js","angular-resource.js", "angular-route.js"}, priority=1000)
@RequireAddressBookCoreWebResource(resource={"app.module.js","app.config.js","core.module.js","person.module.js","person.service.js"},priority=1000)
@RequirePersonListWebResource(resource={"person-list.module.js","person-list.component.js"},priority=1000)
@RequirePersonDetailsWebResource(resource={"person-details.module.js","person-details.component.js"},priority=1000)
@RequireBootstrapWebResource(resource="css/bootstrap.css")
@RequireWebServerExtender
@RequireConfigurerExtender
@Component(name="org.workspace7.enroute.addressbook")
public class AddressbookApplication implements REST {

	public String getUpper(String string) {
		return string.toUpperCase();
	}

}
