(() => {
    const projects = [
        {
            title: 'News',
            sources:[ 
                {
                    title: 'https://www.establis.eu/api/news',
                    href: '../../api-data/news.json'
                },
                {
                    title: 'https://www.establis.eu/api/news?langcode=en',
                    href: '../../api-data/news-langcode-en.json'
                },
                {
                    title: 'https://www.establis.eu/api/news?langcode=nl',
                    href: '/webdes/01-joboffer'
                },
                {
                    title: 'https://www.establis.eu/api/news?field_news_type_target_id=1',
                    href: '/webdes/01-joboffer'
                },
                {
                    title: 'https://www.establis.eu/api/news?field_news_type_target_id=2',
                    href: '/webdes/01-joboffer'
                },
                {
                    title: 'https://www.establis.eu/api/news?langcode=nl&field_news_type_target_id=2',
                    href: '/webdes/01-joboffer'
                },
            ]
        },
        {
            title: 'Projects',
            sources:[ 
                {
                    title: 'https://www.establis.eu/api/projects',
                },
                {
                    title: 'https://www.establis.eu/api/projects?langcode=en',
                },
                {
                    title: 'https://www.establis.eu/api/projects?langcode=nl',
                },
                {
                    title: 'https://www.establis.eu/api/projects?field_project_type_target_id=16',
                },
                {
                    title: 'https://www.establis.eu/api/projects?field_project_type_target_id=17',
                },
                {
                    title: 'https://www.establis.eu/api/projects?field_project_type_target_id=14',
                },
                {
                    title: 'https://www.establis.eu/api/projects?field_project_type_target_id=15',
                },
                {
                    title: 'https://www.establis.eu/api/projects?field_project_type_target_id=3',
                },
                {
                    title: 'https://www.establis.eu/api/projects?langcode=nl&field_project_type_target_id=15',
                },
            ]
        },
        {
            title: 'Teammembers',
            sources:[ 
                {
                    title: 'https://www.establis.eu/api/teammembers',
                },                
            ]
        },
        {
            title: 'Jobs',
            sources:[ 
                {
                    title: 'https://www.establis.eu/api/job?langcode=nl',
                },                
                {
                    title: 'https://www.establis.eu/api/job?langcode=en',
                },                
            ]
        },
    ]

    const app = {
        initialize() {
            console.log('\n' + `%cmain.js ${arguments.callee.name}() running! \n` + ' ', 'color: #00d400; font-weight: bold');
            console.log(`%c${arguments.callee.name}() ran`, 'font-weight: bold');

            const tofill = document.getElementById('projects');
            this.body = document.querySelector('body');
            this.nav = document.querySelector('#nav');

            let menuStr = '';
            projects.forEach((link) => {
                menuStr += `
                    <a href="#${link.title.replace(' ', '').toLowerCase()}">${link.title}</a>
                `
            })


            let tempStr = '';
            projects.forEach((link) => {
                tempStr += `
                    <h2 class="course-title" id="${link.title.replace(' ', '').toLowerCase()}">${link.title}</h2>
                    <hr>
                    ${this.generateDataList(link.sources)}
                `
            })

            tofill.innerHTML = tempStr;
            nav.innerHTML = menuStr;
        },

        generateDataList(projectsArray) {
            console.log(`%c${arguments.callee.name}() ran`, 'font-weight: bold');

            let tempStr = '', href = '';
            projectsArray.forEach((link, index) => {
                href = link.title.replace('https://www.establis.eu/api/', '').replace('&','_').replace('=','_').replace('?','_').replace('=', '_')
                tempStr += `
                    <article data-id="${index}">
                        <div>
                            <!--<h3>${link.title}</h3>-->
                            <p>${link.title}</p>
                            <a class="project-url" href="./api-data/${href}.json" target="_blank"><small>Bezoeken</small></a>
                        </div>
                        <div>
                            <a class="copy-url" style="color: #0000ee;" onclick="copy('https://git.ahs.lennertderyck.be/1920-atwork-3/api-data/${href}.json')">URL Kopieren</a>
                        </div>
                    </article>
                `
            });
            return tempStr;
        },
    }

    app.initialize(); // Initialize app – execute
})()


function copy(input) {
    var dummy = document.createElement('input'),
    text = input;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}


function copyPostUrl() {
    var dummy = document.createElement('input'),
    text = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    createToast('Link gekopieerd', 'De link naar deze pagina is gekopieerd. Plak hem waar nodig.')
}
