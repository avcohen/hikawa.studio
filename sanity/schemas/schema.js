// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import shopifySelector from 'part:@sanity/form-builder/input/shopifySelector/schema'

/**
 * Types
 */

import Product from './Product'
import Page from './Page'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	name: 'default',
	// Then proceed to concatenate our our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		Product,
		Page,
		/* Your types here! */
		shopifySelector,
	]),
})
