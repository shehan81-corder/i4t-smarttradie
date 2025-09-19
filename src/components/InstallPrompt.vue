<template>
  <div v-if="showPrompt" class="install-wrap">
    <div class="install-card">
      <div class="title">Install i4T SmartTradie</div>
      <p class="desc">Add this app to your home screen for a faster, full-screen experience.</p>
      <div class="actions">
        <button v-if="canPrompt" class="primary" @click="install">Install</button>
        <button class="ghost" @click="dismiss">Not now</button>
      </div>
    </div>
  </div>
  <div v-else-if="showIosTip" class="ios-tip">
    <span>To install, tap <strong>Share</strong> then <strong>Add to Home Screen</strong>.</span>
    <button class="ghost" @click="dismissIos">Got it</button>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const deferred = ref(null)
const showPrompt = ref(false)
const canPrompt = ref(false)
const showIosTip = ref(false)

function isIosStandalone(){
  const ua = window.navigator.userAgent
  const isIOS = /iphone|ipad|ipod/i.test(ua)
  const inStandalone = window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches
  return { isIOS, inStandalone }
}

function maybeShowIosTip(){
  const { isIOS, inStandalone } = isIosStandalone()
  if (isIOS && !inStandalone) {
    const hide = localStorage.getItem('ios_tip_dismissed') === '1'
    if (!hide) showIosTip.value = true
  }
}

function beforeInstallPromptHandler(e){
  e.preventDefault()
  deferred.value = e
  canPrompt.value = true
  showPrompt.value = true
}

async function install(){
  if (!deferred.value) return
  const e = deferred.value
  showPrompt.value = false
  const { outcome } = await e.prompt()
  if (outcome !== 'accepted') {
    // user dismissed, allow re-show later
    setTimeout(()=>{ showPrompt.value = true }, 1000)
  }
  deferred.value = null
}

function dismiss(){
  showPrompt.value = false
}

function dismissIos(){
  showIosTip.value = false
  localStorage.setItem('ios_tip_dismissed','1')
}

onMounted(() => {
  window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler)
  maybeShowIosTip()
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler)
})
</script>

<style scoped>
.install-wrap{ position: fixed; inset: 0; display:flex; align-items:flex-end; justify-content:center; padding:16px; background:rgba(15,23,42,0.35); backdrop-filter:saturate(120%) blur(2px); z-index: 50; }
.install-card{ width:100%; max-width:520px; background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; padding:16px; box-shadow:0 10px 30px rgba(2,6,23,0.15); }
.title{ font-weight:700; margin-bottom:6px; }
.desc{ color:#475569; margin:0 0 12px; }
.actions{ display:flex; gap:8px; }
button.primary{ flex:1; padding:12px 14px; background:#0ea5e9; color:#fff; border:none; border-radius:12px; }
button.ghost{ padding:10px 12px; background:transparent; border:1px solid #e2e8f0; border-radius:12px; }
.ios-tip{ position: fixed; left: 50%; transform: translateX(-50%); bottom: 16px; z-index: 40; display:flex; gap:12px; align-items:center; background:#0ea5e9; color:#fff; padding:10px 14px; border-radius:999px; box-shadow:0 8px 22px rgba(14,165,233,0.45); }
.ios-tip button.ghost{ color:#0f172a; background:#fff; border:none; }
@media (min-width: 768px){ .install-wrap{ align-items:center; } }
</style>
