// @flow
import * as React from 'react'
import { Helmet } from 'react-helmet'
import type { SEO } from 'Types/SharedTypes'
import { SettingsConsumer } from 'Views/SettingsProvider'
import type { SiteSettings } from 'Types/ContentTypes'
import type { SanityImage, ShopifyImage } from 'Types/MediaTypes'

/**
 * KameHelmet
 */

type Props = {
	seo: SEO,
	isHomepage: boolean,
	settings: SiteSettings,
}

const getImageUrl = (image: SanityImage | ShopifyImage): string | null =>
	// $FlowFixMe
	image && image.originalSrc ? image.originalSrc : image && image.url ? image.url : null

const KameHelmet = ({ seo, settings, isHomepage }: Props) => {
	if (!settings) return null
	const { name, description, image, contentType, currency, price } = seo
	const siteTitle = settings.seo.name || 'KAME'
	const title = !isHomepage && name && name.length ? `${name} | ${siteTitle}` : siteTitle
	const imageUrl = image ? getImageUrl(image) : null
	const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
	const canonical = `https://www.hikawa.studio${pathname}`
	return (
		<Helmet
			title={title}
			meta={[
				{ name: 'description', content: description },
				{ property: 'og:title', content: title },
				{ property: 'og:description', content: description },
				{ property: 'og:image', content: imageUrl || null },
				{ property: 'og:type', content: contentType || 'website' },
				{ name: 'robots', content: 'index, follow' },
				price ? { property: 'product:price:amount', content: price } : null,
				currency ? { property: 'product:price:currency', content: currency } : null,
			].filter(Boolean)}
			link={[{ rel: 'canonical', href: canonical }]}
		/>
	)
}

type BaseProps = {
	seo: SEO,
	isHomepage?: boolean,
}

const HelmetLoader = (props: BaseProps) => (
	<SettingsConsumer>
		{({ siteSettings, loading }) => {
			if (loading || !siteSettings) return null
			return <KameHelmet settings={siteSettings} {...props} />
		}}
	</SettingsConsumer>
)

HelmetLoader.defaultProps = {
	isHomepage: false,
}

export default HelmetLoader
