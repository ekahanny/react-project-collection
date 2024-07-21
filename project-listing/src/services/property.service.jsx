import axios from "axios"

async function getDataFromApi() {
    const response = await axios.get("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json")
    console.log(response.data);
    return response.data
}

export default getDataFromApi