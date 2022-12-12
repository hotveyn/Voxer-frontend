export const baseFormRequest = function (this: any, url: string, method: string = "POST", attr: any = {}, token: string = "") {
    async function goSend() {
        if (method !== "POST") {
            return await fetch(url + "?" + new URLSearchParams(attr), {
                method: method,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
        } else {
            return await fetch(url, {
                method: method,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(attr)
            });
        }
    }
    return {goSend};
};
