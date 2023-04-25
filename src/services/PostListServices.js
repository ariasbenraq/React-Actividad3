import data from "../PostList.json"

export function getList() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, Math.random() * 3000);
    });
}


