<template>
  <div>
        <div class="section">
            <fieldset>
                <legend>
                    <h3>EXPERIENCE</h3>
                </legend>
                
                    <ul class="section-descriptors">
                        <li v-for="job in experience" :key="job.id" class="descriptor">
                            <div><b>{{ job.title }}</b> | <i>{{ job.duration }}</i></div>
                            <div>{{ job.company }} | {{ job.place }}</div>
                            <div>{{ job.description }}</div>
                        </li>
                    </ul>
            </fieldset>
        </div>

        <div class="section">
            <fieldset>
                <legend>
                    <h3>TECHNICAL SKILLS</h3>
                </legend>
                    <ul class="section-descriptors">
                        <li v-for="skill in techSkills" :key="skill.id">
                            <div>{{ skill.title }}: {{ skill.names }}</div>
                        </li>
                    </ul>
            </fieldset>
        </div>

        <div class="section">
            <fieldset>
                <legend>
                    <h3>EDUCATION</h3>
                </legend>
                    <ul class="section-descriptors">
                        <li v-for="school in schools" :key="school.id" class="descriptor">
                            <div><b>{{ school.program }}</b> | <i>{{ school.gradDate }}</i></div>
                            <div>{{ school.institution }} | {{ school.place }}</div>
                            <div>{{ school.description }}</div>
                        </li>  
                    </ul>
            </fieldset>
        </div>

        <div class="section">
            <fieldset>
                <legend>
                    <h3>VOLUNTEER</h3>
                </legend>
                    <ul class="section-descriptors">
                        <li v-for="volunteer in volunteering" :key="volunteer.id" class="descriptor">
                            <div><b>{{ volunteer.company }} | {{ volunteer.place }}</b></div>
                            <div>{{ volunteer.description }}</div>
                        </li>
                    </ul>
            </fieldset>
        </div>
            
    </div>
</template>

<script>
export default {
    data() {
        return {
            experienceButton: false,
            skillsButton: false,
            // volunteerButton: false,
            experience: [
                {
                    id: 2,
                    title: 'Database/Software Developer',
                    company: 'Pollinate',
                    place: 'Portland, OR',
                    duration: 'December 2019 - August 2020',
                    description: 'As a Database Developer, I was transitioning to a Software Engineer within the company.  I assisted with software development projects for clients like Carhartt and Life is Good, as well as maintained their databases.  I was responsible for making data that\'s human readable to get output to the front-end. I manipulated the data behind 100+ Under Armour garments per month, as well as helped out with the data for JBL speakers, Astro Headsets, and Bauer Hockey equipment, among others.'
                },
                {
                    id: 1,
                    title: 'Database Developer Intern',
                    company: 'Pollinate',
                    place: 'Portland, OR',
                    duration: 'June 2019 - December 2019',
                    description: 'As a Database Developer Intern, I got to learn the interrelations of all of Pollinate\'s databases, expand my SQL knowledge, and help with the data behind building out Under Armour garments.'
                }
            ],
            techSkills: [
                {
                    id: 'languages',
                    title: 'Languages',
                    names: 'HTML, CSS, JavaScript, Python, SQL'
                },
                {
                    id: 'front-end',
                    title: 'Front End',
                    names: 'Vanilla JS, VueJS, CSS Grid, CSS Flexbox'
                },
                {
                    id: 'back-end',
                    title: 'Back End',
                    names: 'NodeJS, ExpressJS'
                },
                {
                    id: 'databases',
                    title: 'Databases',
                    names: 'SQL, PostgreSQL, Mongoose/MongoDB'
                },
                {
                    id: 'testing-suites',
                    title: 'Testing Suites',
                    names: 'Jest, TDD'
                },
                {
                    id: 'tools',
                    title: 'Tools',
                    names: 'Git, GitHub, Slack, Jira, Atlassian, BitBucket'
                },
                {
                    id: 'other',
                    title: 'Other',
                    names: 'REST APIs, Responsive Web Design, Agile, OAuth, JSON Web Token'
                }
            ],
            schools: [
                {
                    id: 'wwu',
                    institution: 'Western Washington University',
                    gradDate: 'Dec 2017',
                    program: 'B.S. in Mathematics',
                    place: 'Bellingham, WA',
                    description: '5 years of single and multivariable calculus, with linear algebra, systems of partial differential equations, and forier analysis.'
                },
                {
                    id: 'alchemy',
                    institution: 'Alchemy Code Lab',
                    gradDate: 'Feb 2019',
                    program: 'Full Stack Software Engineering',
                    place: 'Portland, OR',
                    description: '5-6 months of 60-70 hour work weeks learning Full Stack Javascript'
                }
            ],
            volunteering: [
                {
                    id: 'FG',
                    company: 'Free Geek',
                    place: 'Portland, OR',
                    description: 'A non-profit organization where volunteers and staff recycle and refurbish old computers, while also learning the hardware components'
                }
            ]
        }
    },
    methods: {
        collapsible(value) {
            if(value === 'experience' && this.experienceButton === false) {
                this.experienceButton = true;
            }
            else if(value === 'experience' && this.experienceButton === true) {
                this.experienceButton = false;
            }
            else if(value === 'skills' && this.skillsButton === false) {
                this.skillsButton = true;
            }
            else if(value === 'skills' && this.skillsButton === true) {
                this.skillsButton = false;
            }
        }
    }
}
</script>

<style>
.section {
    margin: 20px;
}

h3 {
    font-family: 'Acme', sans-serif;
}

.section-descriptors {
    width: 75%;
    margin: 0 auto;
    list-style: none;
}

.descriptor {
    padding-bottom: 10px;
}
</style>