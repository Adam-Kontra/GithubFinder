class GitHub {
    constructor () {
        this.config = {
            headers: {
                Authorization: 'token b7a0dd702c79db033f20381e4fb49caaf8a84446'
            }
        };
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`,
        this.config);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
        this.config);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile: profile,
            repos: repos  
        }
    }
} 