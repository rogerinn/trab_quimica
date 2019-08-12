class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();

    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepositories(event);
    }
    addRepositories(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'Rogério Sandro Pereira Junior',
            description: '',
            avatar_url: 'https://avatars0.githubusercontent.com/u/45721104?v=4',
            html_url: 'https://github.com/rogerio0089'
        });

        this.render();
    }
    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', 'blank');
            linkEl.appendChild(document.createTextNode('acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();