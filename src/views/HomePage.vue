<template>
  <div class="page home">
    <header class="top">
      <div>Welcome, {{ username }}!</div>
      <button class="ghost" @click="logout">Logout</button>
    </header>
    <section class="stats">
      <div class="card">
        <div class="label">New Jobs</div>
        <div class="value">{{ newJobs }}</div>
      </div>
      <div class="card">
        <div class="label">Completed</div>
        <div class="value">{{ completedJobs }}</div>
      </div>
    </section>
    <section class="schedule">
      <h2>This Week's Schedule</h2>
      <ul>
        <li v-for="day in schedule" :key="day.day">
          <strong>{{ day.day }}</strong>
          <span class="items">{{ day.items.join(', ') }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/useUserStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useUserStore()
const { username, newJobs, completedJobs, schedule } = storeToRefs(store)

function logout(){
  store.logout()
  router.replace({ name: 'login' })
}
</script>

<style scoped>
.page{ 
  min-height: 100vh; 
  width: 100%;
  padding: 16px; 
  background: #0f4c3a; 
  color: #16a34a;
  /* Ensure content respects safe areas */
  padding-top: max(16px, var(--safe-area-inset-top, 0px));
  padding-bottom: max(16px, var(--safe-area-inset-bottom, 0px));
  padding-left: max(16px, var(--safe-area-inset-left, 0px));
  padding-right: max(16px, var(--safe-area-inset-right, 0px));
}
.top{ display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; }
.stats{ display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:16px; }
.card{ background:#dc2626; color:#fff; padding:16px; border-radius:14px; box-shadow:0 6px 16px rgba(14,165,233,0.35);}
.card .label{ opacity:.9; font-size:14px;}
.card .value{ font-size:28px; font-weight:700;}
.schedule h2{ margin:8px 0 12px; }
.schedule ul{ list-style:none; padding:0; margin:0; display:grid; gap:8px; }
.schedule li{ display:flex; justify-content:space-between; background:#fff; border:1px solid #e2e8f0; padding:12px 14px; border-radius:12px; }
.schedule .items{ color:#475569; }
button.ghost{ background:transparent; border:1px solid #16a34a; color:#16a34a; padding:8px 12px; border-radius:10px; }
@media (min-width: 768px){ .stats{ grid-template-columns: repeat(2, 1fr);} }
</style>
