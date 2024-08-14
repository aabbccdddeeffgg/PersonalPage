import { createRouter, createWebHistory } from 'vue-router'
import BasicInfo from '../view/BasicInfo.vue'
import Education from '../view/EducationInfo.vue'
import Projects from '../view/ProjectsInfo.vue'
import Internships from '../view/InternshipsInfo.vue'
import Skills from '../view/SkillsInfo.vue'
import Certificates from '../view/CertificatesInfo.vue'

const routes = [
  { path: '/PersonalPage', component: BasicInfo },
  { path: '/PersonalPage/education', component: Education },
  { path: '/PersonalPage/projects', component: Projects },
  { path: '/PersonalPage/internships', component: Internships },
  { path: '/PersonalPage/skills', component: Skills },
  { path: '/PersonalPage/certificates', component: Certificates },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
