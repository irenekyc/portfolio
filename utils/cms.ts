import { GoogleSpreadsheet } from 'google-spreadsheet'
import creds from '../config/cred.json'
import {
  ProjectDetailsType,
  ProjectLanguageType,
} from '../typings/ProjectDetails'

// const creds = require('../config/cred.json') // the file saved above

const fetchGoogle = async (): Promise<ProjectDetailsType[] | undefined> => {
  const projectsSheetId = process.env.GOOGLE_PROJECTS_SHEET_ID
  let projects: ProjectDetailsType[] = []

  if (!projectsSheetId) return undefined

  const doc = new GoogleSpreadsheet(projectsSheetId)

  await doc.useServiceAccountAuth(creds)

  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]

  const rows = await sheet.getRows()
  rows.forEach((row) => {
    const libraries: string[] = Object.entries(row)
      .filter(([key, value]) => key.includes('library') && value !== undefined)
      .map(([_, value]) => value)

    projects.push({
      language: row.language as ProjectLanguageType,
      id: row.id as string,
      images: {
        thumbnail: row['image-thumbnail'] as string,
        desktop: row['image-desktop'] as string,
        mobile: row['image-mobile'] as string,
      },
      title: row.title as string,
      description: row.description as string,
      liveWebsite: row['live-website'] as string,
      industry: row.industry as string,
      libraries,
    })
  })

  return projects
}

export default fetchGoogle

// example using impersonation - NOTE: your service account must have "domain-wide delegation" enabled
// see https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority
// await doc.useServiceAccountAuth(creds, 'user.to.impersonate@mycompany.com')
