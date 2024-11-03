const base_url = "https://dte-apps.com/gameapi";

class ApiController {
    constructor() {
        this.categories = [];
        this.playlist = [];
        this.quiz = [];
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
                    resolve(this.categories);
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
                    data.forEach((playlist) => {
                        // Add every playlist to the playlist array
                        this.playlist.push(playlist);
                        console.log(this.playlist);
                    });
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
                    data.forEach((quiz) => {
                        // Add every quiz to the quiz array
                        this.quiz.push(quiz);
                        console.log(this.quiz);
                    });
                    resolve(quiz);
                }).catch((error) => {
                    reject(error);
                });

        });
        fetchQuiz.then(quiz => {
            let fetchQuizJSON = this.fetchQuizJSONAsObject(`${base_url}/${quiz.json}`, quiz);
            fetchQuizJSON.then(quizJSON => {
                this.quiz.json = quizJSON;
                console.log(quizJSON);
            }).catch(error => {
                throw(error);
            });
        }).catch(error => {
            console.log(error);
        });
    }

    fetchQuizJSONAsObject(url, item) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        reject(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(`Error loading json-file for the quiz: ${url} : ${error}`);
                });
        });
    }
}