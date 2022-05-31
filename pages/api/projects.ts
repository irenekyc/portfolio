// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ProjectDetailsType } from '../../typings/ProjectDetails'
import fetchGoogle from '../../utils/cms'

type Data = {
  projects: ProjectDetailsType[]
}

type Error = {
  error: string
}
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data | Error>
) {
	if (
		req.headers.authorization?.replace('Bearer ', '') !==
    process.env.API_SECRECT
	) {
		return res.status(401).json({
			error: 'Unauthorized',
		})
	}
	let allProjects: ProjectDetailsType[] = []
	const projects = await fetchGoogle()
	if (projects) {
		allProjects = projects
	}
	res.status(200).json({
		projects: allProjects.slice(0, 4),
	})
}
