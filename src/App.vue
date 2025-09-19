<template>
  <main>
    <router-view />
      <InstallPrompt />
  </main>
</template>

<script setup>
</script>

<style>
*{ box-sizing: border-box; }
html, body, #app{ height:100%; }
body{ margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; background:#ffffff; color:#0f172a; }
main{ min-height:100vh; }
</style>
