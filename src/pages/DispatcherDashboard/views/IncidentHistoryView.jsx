import React from 'react';
import { emergencyTypeMap, statusMap } from '../../../constants/emergencyTypes';

export default function IncidentHistoryView({ reportLogs }) {
  return (
    <div className="card">
      <h2>Incident History</h2>
      <div className="table-container">
        <table className="log-table">
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Reporter</th>
              <th>Location</th>
              <th>Emergency Type</th>
              <th>Responding Team</th>
              <th>Status</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {reportLogs.length === 0 ? (
              <tr className="empty-row">
                <td colSpan="7">
                  <div className="empty-state">
                    <i className="fas fa-history"></i>
                    <p>No incident records yet</p>
                  </div>
                </td>
              </tr>
            ) : (
              reportLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.reporter}</td>
                  <td>{log.location}</td>
                  <td>
                    <span className="emergency-tag" style={{ 
                      backgroundColor: emergencyTypeMap[log.emergencyType]?.color || '#ccc'
                    }}>
                      {emergencyTypeMap[log.emergencyType]?.label || log.emergencyType}
                    </span>
                  </td>
                  <td>{log.respondingTeam}</td>
                  <td>
                    <span className="status-badge" style={{
                      backgroundColor: statusMap[log.status]?.color || '#ccc'
                    }}>
                      {statusMap[log.status]?.label || log.status}
                    </span>
                  </td>
                  <td>
                    {new Date(log.timestamp).toLocaleString('en-PH', {
                      dateStyle: 'medium',
                      timeStyle: 'short'
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}