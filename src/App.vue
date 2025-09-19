<template>
  <main>
    <router-view />
      <InstallPrompt />
  </main>
</template>

<script setup>
</script>

<style>
*{ 
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
}

html, body, #app{ 
  height: 100%; 
  width: 100%;
  overflow-x: hidden;
}

body{ 
  margin: 0; 
  padding: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; 
  background: #0f4c3a; 
  color: #0f172a;
  /* Support for iPhone safe areas */
  padding-top: var(--safe-area-inset-top);
  padding-bottom: var(--safe-area-inset-bottom);
  padding-left: var(--safe-area-inset-left);
  padding-right: var(--safe-area-inset-right);
}

main{ 
  min-height: 100vh; 
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
