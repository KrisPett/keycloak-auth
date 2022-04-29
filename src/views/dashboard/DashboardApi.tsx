import {DashboardViewModel} from "./DashboardModel";

const port = process.env.REACT_APP_BACKEND_BASE_URL;

export const fetchDashboard = (token: string | undefined): Promise<DashboardViewModel> => {
    return fetch(`${port}/api/dashboard/dashboard`, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then(res => res.json())
}
