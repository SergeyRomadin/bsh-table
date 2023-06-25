export function createData(
    time: string,
    url: string,
    user: string,
    payload: {} | [],
    response: {} | [],
    context: {} | [],
    method: string,
    status: number
) {
    return {
        time,
        url,
        user,
        payload: JSON.stringify(payload, null, "\t"),
        response: JSON.stringify(response, null, "\t"),
        context: JSON.stringify(context, null, "\t"),
        method,
        status,
    };
}
