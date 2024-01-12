import { createStore } from 'vuex'
const dataUrl = "https://unathigcetywa80.github.io/VueData/Data/"
export default createStore({
  state: {
    Testimonials : null,
    skills : null,
    Education: null,
    Projects: null,
  },
  getters: {
  },
  mutations: {
    setTestimonials(state, Testimonials) {
      state.Testimonials = Testimonials
    },
    setSkills(state, skills) {
      state.skills = skills
    },
    setEducation(state, Education) {
      state.Education = Education
    },
    setProjects(state, Projects) {
      state.Projects = Projects
    },

  },
  actions: {
    async fetchTestimonials(context) {
      try {
        let testimonialResponse = await fetch(dataUrl)
        let { Testimonials } = await testimonialResponse.json()
        context.commit('setTestimonials', Testimonials)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchProjects(context) {
      try {
        let projectsResponse = await fetch(dataUrl)
        let { Projects } = await projectsResponse.json()
        context.commit('setProjects', Projects)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchEducation(context) {
      try {
        let EducationResponse = await fetch(dataUrl)
        let { Education } = await EducationResponse.json()
        context.commit('setEducation', Education)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchSkills(context) {
      try {
        let skillsResponse = await fetch(dataUrl)
        let { Skills } = await skillsResponse.json()
        context.commit('setSkills', Skills)
      } catch (error) {
        console.error(error)
      }
    },
  },
  
  modules: {
  }
})