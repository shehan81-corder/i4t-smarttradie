<template>
  <div class="page services">
    <header class="top">
      <button class="back-btn" @click="goBack">← Back</button>
      <h1>Our Services</h1>
    </header>
    
    <div class="content">
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">📋</div>
          <h3>Job Management</h3>
          <p>Track and manage all your jobs in one place. Set priorities, deadlines, and status updates.</p>
          <div class="features">
            <span class="feature-tag">Real-time Updates</span>
            <span class="feature-tag">Priority Setting</span>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-icon">📅</div>
          <h3>Schedule Planning</h3>
          <p>Optimize your daily schedule with smart planning tools and calendar integration.</p>
          <div class="features">
            <span class="feature-tag">Smart Scheduling</span>
            <span class="feature-tag">Calendar Sync</span>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-icon">💬</div>
          <h3>Client Communication</h3>
          <p>Stay connected with clients through integrated messaging and notification system.</p>
          <div class="features">
            <span class="feature-tag">Instant Messaging</span>
            <span class="feature-tag">Notifications</span>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-icon">📊</div>
          <h3>Business Analytics</h3>
          <p>Get insights into your business performance with detailed reports and analytics.</p>
          <div class="features">
            <span class="feature-tag">Performance Reports</span>
            <span class="feature-tag">Revenue Tracking</span>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-icon">📱</div>
          <h3>Mobile App</h3>
          <p>Access your business tools anywhere with our mobile-optimized progressive web app.</p>
          <div class="features">
            <span class="feature-tag">Offline Access</span>
            <span class="feature-tag">Push Notifications</span>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-icon">🔒</div>
          <h3>Data Security</h3>
          <p>Your data is protected with enterprise-grade security and regular backups.</p>
          <div class="features">
            <span class="feature-tag">Encrypted Storage</span>
            <span class="feature-tag">Regular Backups</span>
          </div>
        </div>
      </div>
      
      <div class="cta-section">
        <h3>Ready to Get Started?</h3>
        <p>Join thousands of tradies who trust i4T SmartTradie for their business management needs.</p>
        <button class="cta-button" @click="goToHome">Start Managing Jobs</button>
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

function goToHome() {
  router.push({ name: 'home' })
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

.content{ max-width: 800px; margin: 0 auto; }

.services-grid{ 
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 16px; 
  margin-bottom: 32px; 
}

@media (min-width: 768px) {
  .services-grid{ 
    grid-template-columns: repeat(2, 1fr); 
  }
}

.service-card{ 
  background: rgba(255, 255, 255, 0.05); 
  padding: 20px; 
  border-radius: 16px; 
  border: 1px solid rgba(34, 197, 94, 0.2); 
  transition: transform 0.2s ease; 
}

.service-card:hover{ 
  transform: translateY(-2px); 
  border-color: rgba(34, 197, 94, 0.4); 
}

.service-icon{ 
  font-size: 32px; 
  margin-bottom: 12px; 
}

.service-card h3{ 
  color: #22c55e; 
  margin: 0 0 12px 0; 
  font-size: 18px; 
}

.service-card p{ 
  color: #e2fbe8; 
  line-height: 1.5; 
  margin-bottom: 16px; 
}

.features{ 
  display: flex; 
  flex-wrap: wrap; 
  gap: 8px; 
}

.feature-tag{ 
  background: rgba(34, 197, 94, 0.2); 
  color: #22c55e; 
  padding: 4px 8px; 
  border-radius: 12px; 
  font-size: 12px; 
  font-weight: 500; 
}

.cta-section{ 
  text-align: center; 
  background: rgba(34, 197, 94, 0.1); 
  padding: 24px; 
  border-radius: 16px; 
  border: 1px solid rgba(34, 197, 94, 0.2); 
}

.cta-section h3{ 
  color: #22c55e; 
  margin: 0 0 12px 0; 
  font-size: 20px; 
}

.cta-section p{ 
  color: #e2fbe8; 
  margin-bottom: 20px; 
  line-height: 1.5; 
}

.cta-button{ 
  background: #22c55e; 
  color: #ffffff; 
  border: none; 
  padding: 12px 24px; 
  border-radius: 12px; 
  font-size: 16px; 
  font-weight: 600; 
  cursor: pointer; 
  transition: background 0.2s ease; 
}

.cta-button:hover{ 
  background: #16a34a; 
}
</style>
