import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    username: 'Alex',
    newJobs: 5,
    completedJobs: 8,
    schedule: [
      { day: 'Mon', items: ['Replace tap - 9:00', 'Quote visit - 13:00'] },
      { day: 'Tue', items: ['Electrical check - 10:00'] },
      { day: 'Wed', items: ['Paint touch-up - 14:00'] },
      { day: 'Thu', items: ['Kitchen install - 08:00'] },
      { day: 'Fri', items: ['Site cleanup - 15:00'] }
    ]
  }),
  actions: {
    login(){ this.isLoggedIn = true },
    logout(){ this.isLoggedIn = false }
  }
})
