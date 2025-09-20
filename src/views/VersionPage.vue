<template>
  <div class="page version">
    <header class="top">
      <button class="back-btn" @click="goBack">← Back</button>
      <h1>Version Info</h1>
    </header>
    
    <div class="content">
      <div class="version-card">
        <div class="version-number">v1.0.0</div>
        <div class="version-label">Current Version</div>
      </div>
      
      <div class="info-section">
        <h3>Release Notes</h3>
        <div class="release-item">
          <div class="version">v1.0.0</div>
          <div class="date">December 2024</div>
          <ul>
            <li>Initial release</li>
            <li>Job management system</li>
            <li>Schedule tracking</li>
            <li>PWA support</li>
            <li>Mobile-optimized interface</li>
          </ul>
        </div>
        
        <h3>System Requirements</h3>
        <div class="requirements">
          <div class="req-item">
            <span class="label">Platform:</span>
            <span class="value">iOS 12+, Android 8+</span>
          </div>
          <div class="req-item">
            <span class="label">Browser:</span>
            <span class="value">Safari, Chrome, Edge</span>
          </div>
          <div class="req-item">
            <span class="label">Storage:</span>
            <span class="value">50MB available space</span>
          </div>
        </div>
        
        <h3>Support</h3>
        <p>For technical support or feature requests, please contact our support team.</p>
        <div class="contact-info">
          <div class="contact-item">
            <span class="icon">📧</span>
            <span>support@i4tsmarttradie.com</span>
          </div>
          <div class="contact-item">
            <span class="icon">📞</span>
            <span>+61 2 1234 5678</span>
          </div>
        </div>
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

.version-card{ 
  text-align: center; 
  margin-bottom: 32px; 
  padding: 24px; 
  background: rgba(34, 197, 94, 0.1); 
  border-radius: 16px; 
}

.version-number{ 
  font-size: 32px; 
  font-weight: bold; 
  color: #22c55e; 
  margin-bottom: 8px; 
}

.version-label{ 
  color: #e2fbe8; 
  font-size: 14px; 
}

.info-section h3{ 
  color: #22c55e; 
  margin: 24px 0 12px 0; 
  font-size: 18px; 
}

.release-item{ 
  background: rgba(255, 255, 255, 0.05); 
  padding: 16px; 
  border-radius: 12px; 
  margin-bottom: 16px; 
}

.version{ 
  font-weight: bold; 
  color: #22c55e; 
  margin-bottom: 4px; 
}

.date{ 
  color: #e2fbe8; 
  font-size: 14px; 
  margin-bottom: 12px; 
}

.release-item ul{ 
  padding-left: 20px; 
  color: #e2fbe8; 
  margin: 0; 
}

.release-item li{ 
  margin-bottom: 4px; 
  line-height: 1.4; 
}

.requirements{ 
  background: rgba(255, 255, 255, 0.05); 
  padding: 16px; 
  border-radius: 12px; 
  margin-bottom: 16px; 
}

.req-item{ 
  display: flex; 
  justify-content: space-between; 
  margin-bottom: 8px; 
  padding: 8px 0; 
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
}

.req-item:last-child{ border-bottom: none; }

.label{ color: #e2fbe8; }
.value{ color: #22c55e; font-weight: 500; }

.contact-info{ 
  background: rgba(255, 255, 255, 0.05); 
  padding: 16px; 
  border-radius: 12px; 
}

.contact-item{ 
  display: flex; 
  align-items: center; 
  gap: 12px; 
  margin-bottom: 12px; 
  color: #e2fbe8; 
}

.contact-item:last-child{ margin-bottom: 0; }

.icon{ font-size: 18px; }
</style>
