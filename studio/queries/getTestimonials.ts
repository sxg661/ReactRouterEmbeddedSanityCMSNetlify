import client from "../client";

const QUERY = `*[_type == "testimonial"]`

export async function getTestimonials() {
    try {
        const posts = await client.fetch(QUERY)
        console.log(posts)
    } catch {
        console.error("THAT FAILED!");
    }
}