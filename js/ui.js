class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // showProfile Method
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block mb-2">View Profile</a>
                </div>
            
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>

                    <br><br>

                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    // showRepos Method
    showRepos(repos) {
        let output = '';
        repos.forEach(function(repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>

                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>`
        });


        // Output repos
        document.querySelector('#repos').innerHTML = output;
    }

    // showAlert Method
    showAlert(message, className) {
        // Clear Alerts
        this.clearAlert();

        // Create Div
        const div = document.createElement('div');
        div.className = className;
        // Append message to the div
        div.appendChild(document.createTextNode(message));
    
        // Insert div to the dom
        const parent = document.querySelector('.search-container');
        const searchBar = document.querySelector('.search');

        parent.insertBefore(div, searchBar);

        // TimeOut after 3s
        setTimeout(() => {
        this.clearAlert();
        }, 3000);
    }

    // clearAlert Method
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // clearProfile Method
    clearProfile() {
        this.profile.innerHTML = '';
    }
}