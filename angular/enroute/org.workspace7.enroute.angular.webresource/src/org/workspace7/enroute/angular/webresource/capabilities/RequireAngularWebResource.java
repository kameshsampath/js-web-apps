package org.workspace7.enroute.angular.webresource.capabilities;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

import aQute.bnd.annotation.headers.RequireCapability;
import osgi.enroute.namespace.WebResourceNamespace;

/**
 * A sample web resource requirement 
 */

@RequireCapability(ns = WebResourceNamespace.NS, filter = "(&(" + WebResourceNamespace.NS + "="
		+ AngularConstants.ANGULARPATH + ")${frange;" + AngularConstants.ANGULARVERSION
		+ "})")
@Retention(RetentionPolicy.CLASS)
public @interface RequireAngularWebResource {

	String[] resource() default {"angular.js","angular-resource.js","angular-route.js"};
	int priority() default 1000;
}
