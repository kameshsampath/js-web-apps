package org.workspace7.enroute.addressbook.core.webresource.capabilities;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

import aQute.bnd.annotation.headers.RequireCapability;
import osgi.enroute.namespace.WebResourceNamespace;

/**
 * A sample web resource requirement 
 */

@RequireCapability(ns = WebResourceNamespace.NS, filter = "(&(" + WebResourceNamespace.NS + "="
		+ CoreConstants.COREPATH + ")${frange;" + CoreConstants.COREVERSION
		+ "})")
@Retention(RetentionPolicy.CLASS)
public @interface RequireAddressBookCoreWebResource {

	//Ideally Person services should reside in its own webresource
	String[] resource() default {"app.module.js","app.config.js","core.module.js","person.module.js","person.service.js"};
	int priority() default 0;
}
