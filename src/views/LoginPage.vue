<template>
  <div class="page login">
    <div class="content">
      <h1>i4T SmartTradie</h1>
      <p class="subtitle">Smart job management for tradies</p>
      <button class="primary" @click="handleLogin">Login</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/useUserStore'

const router = useRouter()
const store = useUserStore()

function handleLogin(){
  store.login()
  router.push({ name: 'home' })
}
</script>

<style scoped>
.page{ 
  min-height: 100vh; 
  width: 100%;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding: 24px; 
  background: #0f4c3a; 
  color: #ffffff;
  /* Ensure content respects safe areas */
  padding-top: max(24px, var(--safe-area-inset-top, 0px));
  padding-bottom: max(24px, var(--safe-area-inset-bottom, 0px));
  padding-left: max(24px, var(--safe-area-inset-left, 0px));
  padding-right: max(24px, var(--safe-area-inset-right, 0px));
}
.content{ width:100%; max-width:420px; text-align:center; }
.subtitle{ color:#e2fbe8; margin-bottom:24px; }
button.primary{ width:100%; padding:14px 16px; font-size:16px; border:none; border-radius:12px; background:#22c55e; color:#ffffff; box-shadow:0 8px 20px rgba(34,197,94,0.35); }
button.primary:active{ transform: translateY(1px); }
@media (min-width: 768px){ .content{ border:1px solid #e2e8f0; border-radius:16px; padding:32px; } }
</style>
