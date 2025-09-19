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
.page{ min-height: 100vh; display:flex; align-items:center; justify-content:center; padding:24px; background:#16a34a; color:#ffffff; }
.content{ width:100%; max-width:420px; text-align:center; }
.subtitle{ color:#e2fbe8; margin-bottom:24px; }
button.primary{ width:100%; padding:14px 16px; font-size:16px; border:none; border-radius:12px; background:#15803d; color:#ffffff; box-shadow:0 8px 20px rgba(21,128,61,0.35); }
button.primary:active{ transform: translateY(1px); }
@media (min-width: 768px){ .content{ border:1px solid #e2e8f0; border-radius:16px; padding:32px; } }
</style>
