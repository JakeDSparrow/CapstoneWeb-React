import React, { useState } from 'react';
import DashboardView from './views/DashboardView';
import CalendarView from './views/CalendarView';
import AnnouncementsView from './views/AnnouncementsView';
import RequestsView from './views/RequestsView';
import UsersView from './views/UsersView';
import SettingsView from './views/SettingsView';
import Logo from '../../assets/GoRescueLogo.webp';
import './Admin.css';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('dashboard-view');

  return (
    <div className="admin-dashboard">
      {/* Top Bar */}
      <div className="top-bar">
        <button 
          className="menu-toggle" 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>
        <img src={Logo} alt="GoRescue" className="logo" />
        <div className="user-menu">
          <div className="user-avatar">AD</div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <nav className="sidebar-menu">
          <button 
            type="button"
            className={`menu-item ${activeView === 'dashboard-view' ? 'active' : ''}`}
            onClick={() => setActiveView('dashboard-view')}
          >
            <i className="fas fa-chart-line"></i>
            <span>Dashboard</span>
          </button>
          <button 
            type="button"
            className={`menu-item ${activeView === 'calendar-view' ? 'active' : ''}`}
            onClick={() => setActiveView('calendar-view')}
          >
            <i className="fas fa-calendar-alt"></i>
            <span>Calendar</span>
          </button>
          <button 
            type="button"
            className={`menu-item ${activeView === 'announcements-view' ? 'active' : ''}`}
            onClick={() => setActiveView('announcements-view')}
          >
            <i className="fas fa-bullhorn"></i>
            <span>Announcements</span>
          </button>
          <button 
            type="button"
            className={`menu-item ${activeView === 'requests-view' ? 'active' : ''}`}
            onClick={() => setActiveView('requests-view')}
          >
            <i className="fas fa-envelope"></i>
            <span>Requests</span>
          </button>
          <button 
            type="button"
            className={`menu-item ${activeView === 'users-view' ? 'active' : ''}`}
            onClick={() => setActiveView('users-view')}
          >
            <i className="fas fa-users-cog"></i>
            <span>User Management</span>
          </button>
          <button 
            type="button"
            className={`menu-item ${activeView === 'settings-view' ? 'active' : ''}`}
            onClick={() => setActiveView('settings-view')}
          >
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Main Content Views */}
      <main className="main-content">
        {activeView === 'dashboard-view' && <DashboardView />}
        {activeView === 'calendar-view' && <CalendarView />}
        {activeView === 'announcements-view' && <AnnouncementsView />}
        {activeView === 'requests-view' && <RequestsView />}
        {activeView === 'users-view' && <UsersView />}
        {activeView === 'settings-view' && <SettingsView />}
      </main>
    </div>
  );
};

export default AdminDashboard;