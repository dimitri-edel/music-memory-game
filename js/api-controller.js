const base_url = "https://dte-apps.com/gameapi";

class ApiController {
    constructor() {
        this.categories = [];
        this.playlist = [];
        this.quiz = [];
        this.styles = [];
        this.faces = [];
    }


    getCategories = () => {
        let promise = new Promise((resolve, reject) => {
            const request = new Request(`${base_url}/category/get-all/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            fetch(request)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    // If the categories array is not empty, clear it
                    if (this.categories.length > 0) {
                        this.categories = [];
                    }
                    data.forEach((category) => {
                        // Add every category to the categories array
                        this.categories.push(category);
                        console.log(this.categories);
                    });
                    resolve(data);
                }).catch((error) => {
                    reject(error);
                });

        });
        return promise;
    }

    getPlaylist = (category_id) => {
        let promise = new Promise((resolve, reject) => {
            const request = new Request(`${base_url}/playlist/get-by-category/${category_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            fetch(request)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    // If the playlist array is not empty, clear it
                    if (this.playlist.length > 0) {
                        this.playlist = [];
                    }
                    this.playlist = data;
                    resolve(this.playlist);
                }).catch((error) => {
                    reject(error);
                });

        });
        return promise;
    }

    getQuiz = (cateogry_id) => {
        let fetchQuiz = new Promise((resolve, reject) => {
            const request = new Request(`${base_url}/quiz/get-by-category/${cateogry_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            fetch(request)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    // If the quiz array is not empty, clear it
                    if (this.quiz.length > 0) {
                        this.quiz = [];
                    }
                    let load_json_from_url = this.fetchQuizJSONAsObject(`${base_url}${data[0].json}`);
                    load_json_from_url.then((quiz_json) => {
                        this.quiz = quiz_json;
                        resolve(data);                        
                    }).catch((error) => {
                        throw(error);
                    });                    
                }).catch((error) => {
                    reject(error);
                });

        });
        return fetchQuiz;
    }

    fetchQuizJSONAsObject(url) {
        console.log("fetchQuizJSONAsObject", url);
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        reject(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    this.quiz = data;
                    resolve(data);
                })
                .catch(error => {
                    reject(`Error loading json-file for the quiz: ${url} : ${error}`);
                });
        });
    }

    getStyle = (category_id) => {
        let promise = new Promise((resolve, reject) => {
            const request = new Request(`${base_url}/styles/get-by-category/${category_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            fetch(request)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    this.styles = data;
                    resolve(data);
                }).catch((error) => {
                    reject(error);
                });

        });
        return promise;
    }

    getFaces = (category_id) => {
        let promise = new Promise((resolve, reject) => {
            const request = new Request(`${base_url}/faces/get-by-category/${category_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            fetch(request)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    this.faces = data;
                    console.log("faces loaded:" ,this.faces);
                    resolve(data);
                }).catch((error) => {
                    reject(error);
                });

        });
        return promise;
    }
}

var apiController = new ApiController();