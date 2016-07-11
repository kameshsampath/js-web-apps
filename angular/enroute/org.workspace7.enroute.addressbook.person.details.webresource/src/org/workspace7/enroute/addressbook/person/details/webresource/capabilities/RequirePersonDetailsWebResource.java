package org.workspace7.enroute.addressbook.person.details.webresource.capabilities;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

import aQute.bnd.annotation.headers.RequireCapability;
import osgi.enroute.namespace.WebResourceNamespace;

/**
 * A sample web resource requirement 
 */

@RequireCapability(ns = WebResourceNamespace.NS, filter = "(&(" + WebResourceNamespace.NS + "="
		+ DetailsConstants.DETAILSPATH + ")${frange;" + DetailsConstants.DETAILSVERSION
		+ "})")
@Retention(RetentionPolicy.CLASS)
public @interface RequirePersonDetailsWebResource {

	String[] resource() default {"person-details.module.js","person-details.component.js","person-details.template.html"};
	int priority() default 1000;
}
