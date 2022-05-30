// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ProjectDetailsType } from '../../typings/ProjectDetails'

const allProjects: ProjectDetailsType[] = [
	{
		language: 'javascript',
		id: 'renoon',
		images: {
			thumbnail: '/assets/projects/renoon/renoon-thumbnail.png',
			mobile: '/assets/projects/renoon/renoon-mobile.png',
			desktop: '/assets/projects/renoon/renoon-2.png',
		},
		title: 'Renoon',
		description:
      'Renoon is a Amsterdam based Startup specializing in sustainable fashion. Renoon is a marketplace for sustainable fashion brands to reach wider customer bases. In 2020, they possess over 600 sustainable fashion brand partners and 1,200 active listed products.',
		libraries: [
			'javacript',
			'next-js',
			'redux',
			'auth0',
			'styled-components',
			'algolia',
			'mailchimp',
			'google-tag-manager',
			'google-analytics',
			'cypress',
			'mixpanel',
		],
		liveWebsite: undefined,
		industry: 'Ecommerce',
	},
	{
		language: 'typescript',
		id: 'eTrading',
		images: {
			thumbnail: '/assets/projects/project-2/project2-thumbnail.png',
			mobile: '/assets/projects/project-2/project2-mobile.png',
			desktop: '/assets/projects/project-2/project2-2.png',
		},
		title: 'Finance eTrading Platform',
		description:
      'Customer Trading Platform for world Renowned Financial Institute for Hong Kong and Taiwan clients. Two languages (English and Traditional Chinese) are involved. Two seperate business logics and compliance are involved to accomadate HK and TW regulations.',
		libraries: [
			'typescript',
			'react',
			'am-chart',
			'redux',
			'react-i18n',
			'bootstrap',
			'swiper',
		],
		liveWebsite: undefined,
		industry: 'Finance',
	},
	{
		language: 'javascript',
		id: 'gotyme',
		images: {
			thumbnail: '/assets/projects/GoTyme/gotyme-thumbnail.png',
			mobile: '/assets/projects/GoTyme/gotyme-mobile.png',
			desktop: '/assets/projects/GoTyme/gotyme-2.png',
		},
		title: 'GoTyme Bank',
		description:
      'Teaser site for GOTyme Bank -  a Philippine based Fintech Startup. Site is filled with lotties and animation scroll trigger.',
		libraries: ['javascript', 'gsap', 'lottie'],
		liveWebsite: undefined,
		industry: 'Finance',
	},
	{
		language: 'typescript',
		id: 'sino-farm-together',
		images: {
			thumbnail: '/assets/projects/sino/sino-thumbnail.png',
			mobile: '/assets/projects/sino/sino-mobile.png',
			desktop: '/assets/projects/sino/sino-2.png',
		},
		title: 'Sino Farm Together',
		description:
      ' Hong Kong based Farm Group websites consists of three languages (Traditional Chinese, Simplified Chinese and English). Content is managed with Strapi, data is called with graphql',
		libraries: [
			'typescript',
			'react-i18n',
			'typescript',
			'redux',
			'Sass',
			'graphql',
			'strapi',
			'swiper',
			'google-tag-manager',
		],
		liveWebsite: undefined,
		industry: 'General',
	},
]

type Data = {
  projects: ProjectDetailsType[]
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({
		projects: allProjects.slice(0, 4),
	})
}
