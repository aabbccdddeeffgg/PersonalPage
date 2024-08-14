import { createRouter, createWebHistory } from 'vue-router'
import BasicInfo from '../view/BasicInfo.vue'
import Education from '../view/EducationInfo.vue'
import Projects from '../view/ProjectsInfo.vue'
import Internships from '../view/InternshipsInfo.vue'
import Skills from '../view/SkillsInfo.vue'
import Certificates from '../view/CertificatesInfo.vue'

const routes = [
  { path: '/', component: BasicInfo },
  { path: '/education', component: Education },
  { path: '/projects', component: Projects },
  { path: '/internships', component: Internships },
  { path: '/skills', component: Skills },
  { path: '/certificates', component: Certificates },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
