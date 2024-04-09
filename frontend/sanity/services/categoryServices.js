import { client } from "../client";

export async function fetchAllCategories(){
    const data = await client.fetch(`*[_type = "categories"] {
        _id,
        categorytitle,
        "catslug": categoryurl.current
    }`)
    return data
}
export async function fetchCategoryBySlug(slug){
    // "$" viser sanity det er en parameter vi sender med
    const data = await client.fetch(`*[_type = "categories && categoryurl.curent == $slug]`, {slug}) 
    return data

}
