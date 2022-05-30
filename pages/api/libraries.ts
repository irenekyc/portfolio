// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { LibraryDataType } from '../../typings/ProjectDetails'

const allLibraries: LibraryDataType[] = [
	{
		id: 'next-js',
		libraryFeatured: false,
		title: 'Next Js',
		image: {
			black: '/assets/icons/nexjs-black.svg',
			white: '/assets/icons/nexjs.svg',
		},
	},
	{
		id: 'react',
		libraryFeatured: false,
		title: 'React',
		image: {
			black: '/assets/icons/React-icon.svg',
			white: '/assets/icons/React-icon.svg',
		},
	},
	{
		id: 'redux',
		libraryFeatured: false,
		title: 'Redux',
		image: {
			black: '/assets/icons/redux.svg',
			white: '/assets/icons/redux.svg',
		},
	},
	{
		id: 'solidity',
		libraryFeatured: false,
		title: 'Solidity',
		image: {
			black: '/assets/icons/solidity,svg',
			white: '/assets/icons/solidity,svg',
		},
	},
	{
		id: 'javascript',
		libraryFeatured: false,
		title: 'Javascript',
		image: {
			black: '/assets/icons/logo-javascript.svg',
			white: '/assets/icons/logo-javascript.svg',
		},
	},
	{
		id: 'typescript',
		libraryFeatured: false,
		title: 'Typescript',
		image: {
			black: '/assets/icons/typescript.svg',
			white: '/assets/icons/typescript.svg',
		},
	},
	{
		id: 'webflow',
		libraryFeatured: false,
		title: 'Webflow',
		image: {
			black: '/assets/icons/webflow-logo-white.svg',
			white: '/assets/icons/webflow-logo-white.svg',
		},
	},
	{
		id: 'algolia',
		libraryFeatured: true,
		title: 'Algolia',
		image: {
			black: '/assets/icons/libraries/algolia-3.svg',
			white: '/assets/icons/libraries/algolia-3.svg',
		},
	},
	{
		id: 'am-chart',
		libraryFeatured: true,
		title: 'AMChart',
		image: {
			black: '/assets/icons/libraries/amcharts.png',
			white: '/assets/icons/libraries/amcharts.png',
		},
	},
	{
		id: 'auth0',
		libraryFeatured: true,
		title: 'Auth0',
		image: {
			black: '/assets/icons/libraries/auth0-icon.svg',
			white: '/assets/icons/libraries/auth0-icon.svg',
		},
	},
	{
		id: 'bootstrap',
		libraryFeatured: true,
		title: 'Bootstrap',
		image: {
			black: '/assets/icons/libraries/bootstrap.svg',
			white: '/assets/icons/libraries/bootstrap.svg',
		},
	},
	{
		id: 'cypress',
		title: 'Cypress',
		libraryFeatured: true,
		image: {
			black: '/assets/icons/libraries/cypress-black.png',
			white: '/assets/icons/libraries/cypress.png',
		},
	},
	{
		id: 'google-analytics',
		libraryFeatured: true,
		title: 'Google Analytics',
		image: {
			black: '/assets/icons/libraries/google-analytics-4.svg',
			white: '/assets/icons/libraries/google-analytics-4.svg',
		},
	},
	{
		id: 'google-tag-manager',
		libraryFeatured: true,
		title: 'Google Tag Manager',
		image: {
			black: '/assets/icons/libraries/google-tag-manager.svg',
			white: '/assets/icons/libraries/google-tag-manager.svg',
		},
	},
	{
		id: 'gsap',
		libraryFeatured: true,
		title: 'GSAP',
		image: {
			black: '/assets/icons/libraries/gsap-greensock.svg',
			white: '/assets/icons/libraries/gsap-greensock.svg',
		},
	},
	{
		id: 'lottie',
		libraryFeatured: true,
		title: 'Lottie',
		image: {
			black: '/assets/icons/libraries/lottie.webp',
			white: '/assets/icons/libraries/lottie.webp',
		},
	},
	{
		id: 'mailchimp',
		libraryFeatured: true,
		title: 'Mailchimp',
		image: {
			black: '/assets/icons/libraries/mailchimp-black.png',
			white: '/assets/icons/libraries/mailchimp.png',
		},
	},
	{
		id: 'mixpanel',
		libraryFeatured: true,
		title: 'Mixpanel',
		image: {
			black: '/assets/icons/libraries/mixpanel.svg',
			white: '/assets/icons/libraries/mixpanel.svg',
		},
	},
	{
		id: 'sass',
		libraryFeatured: true,
		title: 'Sass',
		image: {
			black: '/assets/icons/libraries/sass.svg',
			white: '/assets/icons/libraries/sass.svg',
		},
	},
	{
		id: 'react-i18n',
		libraryFeatured: true,
		title: 'React i18n',
		image: {
			black: '/assets/icons/libraries/react-i18n.png',
			white: '/assets/icons/libraries/react-i18n.png',
		},
	},
	{
		id: 'strapi',
		libraryFeatured: true,
		title: 'Strapi',
		image: {
			black: '/assets/icons/libraries/strapi.svg',
			white: '/assets/icons/libraries/strapi.svg',
		},
	},
	{
		id: 'graphql',
		libraryFeatured: true,
		title: 'GraphQL',
		image: {
			black: '/assets/icons/libraries/graphql.svg',
			white: '/assets/icons/libraries/graphql.svg',
		},
	},
	{
		id: 'styled-components',
		libraryFeatured: true,
		title: 'Styled Components',
		image: {
			black: '/assets/icons/libraries/styled-components-black.svg',
			white: '/assets/icons/libraries/styled-components.png',
		},
	},
	{
		id: 'swiper',
		libraryFeatured: true,
		title: 'Swiper',
		image: {
			black: '/assets/icons/libraries/swiper.svg',
			white: '/assets/icons/libraries/swiper.svg',
		},
	},
]

type Data = {
  libraries: LibraryDataType[]
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.query && req.query.title) {
		const titles = req.query.title as string
		const titlesArr: string[] = titles.split(' ')
		const results = allLibraries.filter((libraries) =>
			titlesArr.includes(libraries.id)
		)
		return res.status(200).json({
			libraries: results,
		})
	}
	res.status(200).json({
		libraries: allLibraries.filter(
			(library: LibraryDataType) => library.libraryFeatured
		),
	})
}
