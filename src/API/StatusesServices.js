import axios from "axios";


export async function fetchStatuses () {
    const res = await axios.get('https://expressjs-server.vercel.app/statuses')
    return res;
}
