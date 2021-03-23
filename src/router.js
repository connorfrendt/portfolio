import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Resume from './components/Resume.vue';
import AboutMe from './components/AboutMe.vue';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/projects', component: Projects },
        { path: '/resume', component: Resume },
        { path: '/aboutme', component: AboutMe },
        { path: '*', redirect: '/' }
    ]
});