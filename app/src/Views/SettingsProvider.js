// @flow
import * as React from 'react'
import gql from 'graphql-tag'
import Query from 'GraphQL/Query'
import { colorPartial, linkPartial, richTextPartial, sanityImageFields } from 'GraphQL/partials'
import { FadeIn } from 'Components/Effects'

const { Consumer, Provider } = React.createContext()

export const SettingsConsumer = Consumer

const query = gql`
	query SettingsQuery {
		siteSettings {
			announcement {
				backgroundColor {
					${colorPartial}
				}
				link {
					${linkPartial}
				}
				enabled
				text {
					${richTextPartial}
				}
			}
			checkout {
				text {
					${richTextPartial}
				}
			}
			logo {
				url
				id
				altText
				_key
				_type
				_ref
			}
			mailer {
				buttonLabel
				footerText {
					${richTextPartial}
				}
				popupText {
					${richTextPartial}
				}
				popupEnabled
				popupBackground {
					${sanityImageFields}
				}
			}
			navigation {
				footer {
					links {
						${linkPartial}
					}
					text {
						${richTextPartial}
					}
				}
				header {
					links {
						${linkPartial}
					}
				}
			}
			product {
				text {
					${richTextPartial}
				}
			}
			seo {
				name
				description
				image {
					url
					id
					altText
					_key
					_type
					_ref
				}
			}
		}
	}
`

/**
 * SettingsProvider
 */

type Props = {
	children: React.Node,
}

export const SettingsProvider = ({ children }: Props) => (
	<Query LoadingComponent={false} query={query}>
		{({ data }) => (
			<Provider value={data.siteSettings}>
				<FadeIn delay={1000}>{children}</FadeIn>
			</Provider>
		)}
	</Query>
)
