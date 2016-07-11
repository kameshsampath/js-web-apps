package org.workspace7.enroute.addressbook.person.list.webresource.capabilities;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

import aQute.bnd.annotation.headers.RequireCapability;
import osgi.enroute.namespace.WebResourceNamespace;

/**
 * A sample web resource requirement 
 */

@RequireCapability(ns = WebResourceNamespace.NS, filter = "(&(" + WebResourceNamespace.NS + "="
		+ PersonListConstants.LISTPATH + ")${frange;" + PersonListConstants.LISTVERSION
		+ "})")
@Retention(RetentionPolicy.CLASS)
public @interface RequirePersonListWebResource {

	String[] resource() default {"person-list.module.js","person-list.component.js","person-list.template.html"};
	int priority() default 0;
}
