import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "l5jst7m2",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})
