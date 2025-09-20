<template>
  <div class="page home">
    <!-- Mobile App Header -->
    <header class="app-header">
      <div class="header-left">
        <button class="menu-btn" @click="toggleMenu" :class="{ active: menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="app-title">
          <div class="logo-icon">🔧</div>
          <span>SmartTradie</span>
        </div>
      </div>
      <div class="header-right">
        <button class="profile-btn" @click="logout">👤</button>
      </div>
    </header>

    <!-- Hamburger Menu Overlay -->
    <div class="menu-overlay" :class="{ active: menuOpen }" @click="closeMenu">
      <div class="menu-content" @click.stop>
        <div class="menu-header">
          <div class="user-info">
            <div class="user-avatar">👤</div>
            <div class="user-details">
              <div class="user-name">{{ username }}</div>
              <div class="user-role">Tradie</div>
            </div>
          </div>
        </div>
        <nav class="menu-nav">
          <a href="#" class="menu-item" @click="goToPage('home')">
            <span class="menu-icon">🏠</span>
            <span>Dashboard</span>
          </a>
          <a href="#" class="menu-item" @click="goToPage('services')">
            <span class="menu-icon">🛠️</span>
            <span>Services</span>
          </a>
          <a href="#" class="menu-item" @click="goToPage('about')">
            <span class="menu-icon">ℹ️</span>
            <span>About Us</span>
          </a>
          <a href="#" class="menu-item" @click="goToPage('version')">
            <span class="menu-icon">📱</span>
            <span>Version Info</span>
          </a>
        </nav>
        <div class="menu-footer">
          <button class="logout-btn" @click="logout">
            <span class="menu-icon">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="main-content">
      <div class="welcome-section">
        <h1>Welcome back, {{ username }}!</h1>
        <p>Here's what's happening with your jobs today</p>
      </div>

      <section class="stats-grid">
        <div class="stat-card new-jobs">
          <div class="stat-icon">📋</div>
          <div class="stat-content">
            <div class="stat-label">New Jobs</div>
            <div class="stat-value">{{ newJobs }}</div>
          </div>
        </div>
        <div class="stat-card completed">
          <div class="stat-icon">✅</div>
          <div class="stat-content">
            <div class="stat-label">Completed</div>
            <div class="stat-value">{{ completedJobs }}</div>
          </div>
        </div>
        <div class="stat-card pending">
          <div class="stat-icon">⏳</div>
          <div class="stat-content">
            <div class="stat-label">Pending</div>
            <div class="stat-value">3</div>
          </div>
        </div>
        <div class="stat-card revenue">
          <div class="stat-icon">💰</div>
          <div class="stat-content">
            <div class="stat-label">Revenue</div>
            <div class="stat-value">$2,450</div>
          </div>
        </div>
      </section>

      <section class="schedule-section">
        <div class="section-header">
          <h2>This Week's Schedule</h2>
          <button class="view-all-btn">View All</button>
        </div>
        <div class="schedule-list">
          <div v-for="day in schedule" :key="day.day" class="schedule-item">
            <div class="day-info">
              <div class="day-name">{{ day.day }}</div>
              <div class="day-date">{{ day.date || 'Today' }}</div>
            </div>
            <div class="day-items">
              <span v-for="item in day.items" :key="item" class="item-tag">{{ item }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="quick-actions">
        <h2>Quick Actions</h2>
        <div class="actions-grid">
          <button class="action-btn">
            <span class="action-icon">➕</span>
            <span>New Job</span>
          </button>
          <button class="action-btn">
            <span class="action-icon">📅</span>
            <span>Schedule</span>
          </button>
          <button class="action-btn">
            <span class="action-icon">📊</span>
            <span>Reports</span>
          </button>
          <button class="action-btn">
            <span class="action-icon">💬</span>
            <span>Messages</span>
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/useUserStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useUserStore()
const { username, newJobs, completedJobs, schedule } = storeToRefs(store)

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function goToPage(pageName) {
  closeMenu()
  if (pageName !== 'home') {
    router.push({ name: pageName })
  }
}

function logout(){
  store.logout()
  router.replace({ name: 'login' })
}
</script>

<style scoped>
.page{ 
  min-height: 100vh; 
  width: 100%;
  background: #0f4c3a; 
  color: #ffffff;
  display: flex;
  flex-direction: column;
  /* Ensure content respects safe areas */
  padding-top: var(--safe-area-inset-top, 0px);
}

/* Mobile App Header */
.app-header {
  background: #0f4c3a;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(34, 197, 94, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.menu-btn {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.menu-btn span {
  width: 20px;
  height: 2px;
  background: #22c55e;
  transition: all 0.3s ease;
}

.menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.app-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 18px;
  color: #22c55e;
}

.logo-icon {
  font-size: 20px;
}

.profile-btn {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid #22c55e;
  color: #22c55e;
  padding: 8px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
}

/* Hamburger Menu */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.menu-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: #0f4c3a;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.menu-overlay.active .menu-content {
  transform: translateX(0);
}

.menu-header {
  padding: 20px;
  border-bottom: 1px solid rgba(34, 197, 94, 0.2);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  background: rgba(34, 197, 94, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.user-name {
  font-weight: bold;
  color: #22c55e;
  font-size: 16px;
}

.user-role {
  color: #e2fbe8;
  font-size: 14px;
}

.menu-nav {
  flex: 1;
  padding: 20px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  color: #e2fbe8;
  text-decoration: none;
  transition: background 0.2s ease;
}

.menu-item:hover {
  background: rgba(34, 197, 94, 0.1);
}

.menu-icon {
  font-size: 18px;
  width: 24px;
  text-align: center;
}

.menu-footer {
  padding: 20px;
  border-top: 1px solid rgba(34, 197, 94, 0.2);
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  background: none;
  border: none;
  color: #e2fbe8;
  padding: 16px 0;
  cursor: pointer;
  font-size: 16px;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 20px 16px;
  padding-bottom: max(20px, var(--safe-area-inset-bottom, 0px));
}

.welcome-section {
  margin-bottom: 24px;
}

.welcome-section h1 {
  font-size: 24px;
  margin: 0 0 8px 0;
  color: #22c55e;
}

.welcome-section p {
  color: #e2fbe8;
  margin: 0;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(34, 197, 94, 0.2);
  display: flex;
  align-items: center;
  gap: 12px;
}

.stat-icon {
  font-size: 24px;
}

.stat-content {
  flex: 1;
}

.stat-label {
  font-size: 12px;
  color: #e2fbe8;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 20px;
  font-weight: bold;
  color: #22c55e;
}

/* Schedule Section */
.schedule-section {
  margin-bottom: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-header h2 {
  font-size: 18px;
  margin: 0;
  color: #22c55e;
}

.view-all-btn {
  background: none;
  border: none;
  color: #22c55e;
  font-size: 14px;
  cursor: pointer;
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.schedule-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.day-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.day-name {
  font-weight: bold;
  color: #22c55e;
}

.day-date {
  font-size: 12px;
  color: #e2fbe8;
}

.day-items {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.item-tag {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
}

/* Quick Actions */
.quick-actions h2 {
  font-size: 18px;
  margin: 0 0 16px 0;
  color: #22c55e;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.action-btn {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid #22c55e;
  color: #22c55e;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.action-btn:hover {
  background: rgba(34, 197, 94, 0.2);
}

.action-icon {
  font-size: 24px;
}

.action-btn span:last-child {
  font-size: 14px;
  font-weight: 500;
}
</style>
