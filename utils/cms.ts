import {
  GoogleSpreadsheet,
  ServiceAccountCredentials,
} from 'google-spreadsheet'

import {
  ProjectDetailsType,
  ProjectLanguageType,
} from '../typings/ProjectDetails'

type CredentialType = {
  type: string | undefined
  project_id: string | undefined
  private_key_id: string | undefined
  private_key: string | undefined
  client_email: string | undefined
  client_id: string | undefined
  auth_uri: string | undefined
  token_uri: string | undefined
  auth_provider_x509_cert_url: string | undefined
  client_x509_cert_url: string | undefined
}

const createCreds = (): CredentialType | undefined => {
  let creds: CredentialType = {
    type: process.env.GOOGLE_CREDENTIAL_TYPE,
    project_id: process.env.GOOGLE_CREDENTIAL_PROJECT_ID,
    private_key_id: process.env.GOOGLE_CREDENTIAL_PRIVATE_KEY_ID,
    private_key: JSON.parse(
      process.env.GOOGLE_CREDENTIAL_PRIVATE_KEY || '{ privateKey: null }'
    ).privateKey,
    client_email: process.env.GOOGLE_CREDENTIAL_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CREDENTIAL_CLIENT_ID,
    auth_uri: process.env.GOOGLE_CREDENTIAL_AUTH_URI,
    token_uri: process.env.GOOGLE_CREDENTIAL_TOKEN_URI,
    auth_provider_x509_cert_url:
      process.env.GOOGLE_CREDENTIAL_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.GOOGLE_CREDENTIAL_CLIENT_X509_CERT_URL,
  }

  const hasUndefined = Object.values(creds).filter(
    (credValue) => credValue === undefined
  )
  if (hasUndefined.length > 0) {
    return undefined
  } else {
    return creds
  }
}

const fetchGoogle = async (): Promise<ProjectDetailsType[] | undefined> => {
  const projectsSheetId = process.env.GOOGLE_PROJECTS_SHEET_ID
  let projects: ProjectDetailsType[] = []
  const creds = createCreds()
  if (!projectsSheetId || !creds) return undefined

  const doc = new GoogleSpreadsheet(projectsSheetId)
  await doc.useServiceAccountAuth(creds as ServiceAccountCredentials)

  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]

  const rows = await sheet.getRows()
  rows.forEach((row) => {
    const libraries: string[] = Object.entries(row)
      .filter(
        ([key, value]) => key.includes('library') && value !== 'undefined'
      )
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
