// @flow
import React from 'react'
import { Switch } from 'react-router-dom'
import Route from 'Components/Route'
import { Main } from 'Components/Layout'
import Announcement from 'Components/Announcement'
import ScrollToTop from 'Components/ScrollToTop'
import { SentryBoundary } from '../Services/Sentry'
import NavMenu from './Menu'
import { SettingsProvider } from './SettingsProvider'
import { CheckoutProvider } from './CheckoutProvider'
import MailerPopup from './MailerPopup'
import Footer from './Footer'
import BaseSEO from './BaseSEO'
import CartModal from './Cart/CartModal'
import { routes } from '../Routes'

/**
 * App
 */

const App = () => (
	<SettingsProvider>
		<CheckoutProvider>
			<BaseSEO />
			<MailerPopup />
			<SentryBoundary>
				<Announcement />
			</SentryBoundary>
			<CartModal />
			<ScrollToTop />
			<Main>
				<NavMenu />
				<Switch>
					{routes.map((r) => (
						<Route key={r.path} {...r} />
					))}
				</Switch>
			</Main>
			<Footer />
		</CheckoutProvider>
	</SettingsProvider>
)

export default App
