import React from 'react';

const DashboardView = () => {
  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <div className="actions">
          <button className="btn btn-outline">
            <i className="fas fa-download"></i> Export
          </button>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">
            <i className="fas fa-users"></i> Total Users
          </div>
          <div className="stat-value">1,248</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">
            <i className="fas fa-ambulance"></i> Active Responders
          </div>
          <div className="stat-value">86</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">
            <i className="fas fa-clock"></i> Pending Requests
          </div>
          <div className="stat-value">24</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">
            <i className="fas fa-check-circle"></i> Resolved Today
          </div>
          <div className="stat-value">18</div>
        </div>
      </div>
      
      {/* Calendar Card */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Upcoming Events</div>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Add Event
          </button>
        </div>
        <div className="calendar">
          <div className="calendar-header">
            <div className="calendar-title">July 2023</div>
            <div className="calendar-nav">
              <button className="calendar-nav-btn">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="calendar-nav-btn">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <div className="calendar-grid">
            <div className="calendar-day-header">Sun</div>
            <div className="calendar-day-header">Mon</div>
            <div className="calendar-day-header">Tue</div>
            <div className="calendar-day-header">Wed</div>
            <div className="calendar-day-header">Thu</div>
            <div className="calendar-day-header">Fri</div>
            <div className="calendar-day-header">Sat</div>
            
            {/* Calendar days would be dynamically generated */}
            <div className="calendar-day other-month">
              <div className="calendar-day-number">25</div>
            </div>
            <div className="calendar-day other-month">
              <div className="calendar-day-number">26</div>
            </div>
            <div className="calendar-day other-month">
              <div className="calendar-day-number">27</div>
            </div>
            <div className="calendar-day">
              <div className="calendar-day-number">1</div>
            </div>
            <div className="calendar-day">
              <div className="calendar-day-number">2</div>
            </div>
            <div className="calendar-day today">
              <div className="calendar-day-number">3</div>
            </div>
            {/* More days would go here */}
          </div>
        </div>
      </div>
      
      {/* Recent Activity Card */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Recent Activity</div>
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-time">10:30 AM</div>
            <div className="activity-content">New responder registered - John Doe</div>
          </div>
          {/* More activity items would go here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;