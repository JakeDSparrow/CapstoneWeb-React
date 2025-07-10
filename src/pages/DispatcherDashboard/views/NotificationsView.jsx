import React from 'react';

export default function NotificationsView({ notifications, dispatchTeam, dispatchAllResponders, viewOnMap }) {
  return (
    <div>
      <h2>Notifications</h2>
      <div className="notification-list">
        {notifications.length === 0 ? (
          <p>No active notifications.</p>
        ) : (
          notifications.map(notification => (
            <div key={notification.id} className="notification-card">
              <h3>{notification.type.toUpperCase()} – {notification.location}</h3>
              <p><strong>Reported by:</strong> {notification.reporter} ({notification.reporterContact})</p>
              <p><strong>Details:</strong> {notification.details}</p>
              <div className="notification-actions">
                <button onClick={() => viewOnMap(notification.coordinates)}>View on Map</button>
                <button onClick={() => dispatchAllResponders(notification.id)}>Dispatch All</button>
                <button onClick={() => dispatchTeam(notification.id, 'alpha')}>Send Team Alpha</button>
                <button onClick={() => dispatchTeam(notification.id, 'bravo')}>Send Team Bravo</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
