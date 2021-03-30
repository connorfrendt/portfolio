<template>
  <div>
        <h3>EXPERIENCE</h3>

            <button @click="collapsible()" id="hey">
                Database Developer | Pollinate | Portland, OR
                    <br />
                December 2019 - August 2020
            </button>
                <div v-show="clicked">
                    As a Database Developer, I was transitioning to a software engineer within the company.  I assisted with software development projects for clients like Carhartt and Life is Good, as well as maintained their databases.  I was responsible for making data that's human readable to get output to the front-end.
                    I manipulated the data behind 100+ Under Armour garments per month, as well as helped out with the data for JBL speakers, Astro Headsets, and Bauer Hockey equipment, among others.
                </div>

            <div><b>Database Developer Intern | Pollinate | Portland, OR</b></div>
            <div><i>June 2019 - December 2020</i></div>
                <p>
                    As a Database Developer Intern, I got to learn the interrelations of all of Pollinate's databases, expand my SQL knowledge, and help with the data behind building out Under Armour garments.
                </p>

        <h3>TECHNICAL SKILLS</h3>
            <button>
                Tech Stacks/Languages
            </button>
            <div v-show="clicked">
                Languages:  HTML, CSS, Javascript, Python, SQL
                <br />
                Front End:  Vanilla JS, Vue.js, CSS Grid, CSS Flexbox
                <br />
                Back End: Node.js, Express.js
                <br />
                Databases: SQL, PostgreSQL, Mongoose/Mongo
                <br />
                Testing Suites: Jest, TDD
                <br />
                Tools: Git, GitHub, Slack, Jira, Atlassian, BitBucket
                <br />
                Other: REST APIs, Responsive Web Design, Agile, OAuth, JSON Web Token
            </div>


        <h3>EDUCATION</h3>
            <ul>
                <li v-for="school in schools" :key="school.id">
                    <div>{{ school.program }} | {{ school.gradDate }}</div>
                    <div>{{ school.institution }} | {{ school.place }}</div>
                    <div>{{ school.description }}</div>
                </li>  
            </ul>

        <h3>VOLUNTEER</h3>
            <ul>
                <li v-for="volunteer in volunteering" :key="volunteer.id">
                    <div>{{ volunteer.company }} | {{ volunteer.place }}</div>
                    <div>{{ volunteer.description }}</div>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clicked: false,
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
        collapsible(event) {
            console.log(event.currentTarget.id, ' was clicked');
            if(!this.clicked) this.clicked = true;
            else this.clicked = false;
        }
    }
}
</script>

<style>
h3 {
    text-align: center;
}
</style>