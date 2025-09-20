<template>
  <div class="page about">
    <header class="top">
      <button class="back-btn" @click="goBack">← Back</button>
      <h1>About Us</h1>
    </header>
    
    <div class="content">
      <div class="logo-section">
        <div class="logo-icon">🔧</div>
        <h2>i4T SmartTradie</h2>
        <p class="tagline">Empowering tradies with smart technology</p>
      </div>
      
      <div class="info-section">
        <h3>Our Mission</h3>
        <p>We're revolutionizing the way tradies manage their jobs, schedules, and business operations through innovative mobile technology.</p>
        
        <h3>What We Do</h3>
        <ul>
          <li>Job management and tracking</li>
          <li>Schedule optimization</li>
          <li>Client communication</li>
          <li>Business analytics</li>
          <li>Mobile-first design</li>
        </ul>
        
        <h3>Contact</h3>
        <p>Email: info@i4tsmarttradie.com<br>
        Phone: +61 2 1234 5678<br>
        Website: www.i4tsmarttradie.com</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.go(-1)
}
</script>

<style scoped>
.page{ 
  min-height: 100vh; 
  width: 100%;
  padding: 16px; 
  background: #0f4c3a; 
  color: #ffffff;
  /* Ensure content respects safe areas */
  padding-top: max(16px, var(--safe-area-inset-top, 0px));
  padding-bottom: max(16px, var(--safe-area-inset-bottom, 0px));
  padding-left: max(16px, var(--safe-area-inset-left, 0px));
  padding-right: max(16px, var(--safe-area-inset-right, 0px));
}

.top{ 
  display: flex; 
  align-items: center; 
  margin-bottom: 24px; 
  gap: 16px;
}

.back-btn{ 
  background: transparent; 
  border: 1px solid #22c55e; 
  color: #22c55e; 
  padding: 8px 12px; 
  border-radius: 8px; 
  font-size: 16px;
}

h1{ margin: 0; font-size: 24px; }

.content{ max-width: 600px; margin: 0 auto; }

.logo-section{ 
  text-align: center; 
  margin-bottom: 32px; 
  padding: 24px; 
  background: rgba(34, 197, 94, 0.1); 
  border-radius: 16px; 
}

.logo-icon{ font-size: 48px; margin-bottom: 12px; }
.tagline{ color: #e2fbe8; margin-top: 8px; }

.info-section h3{ 
  color: #22c55e; 
  margin: 24px 0 12px 0; 
  font-size: 18px; 
}

.info-section p{ 
  line-height: 1.6; 
  margin-bottom: 16px; 
  color: #e2fbe8; 
}

.info-section ul{ 
  padding-left: 20px; 
  color: #e2fbe8; 
}

.info-section li{ 
  margin-bottom: 8px; 
  line-height: 1.5; 
}
</style>
