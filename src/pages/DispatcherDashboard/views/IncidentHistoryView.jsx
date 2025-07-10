import React from 'react';

export default function IncidentHistoryView({ reportLogs }) {
  const completedLogs = reportLogs.filter(log => log.status === 'completed');

  return (
    <div className="content-view" id="incident-history-view">
      <h2>Incident History</h2>
      {completedLogs.length === 0 ? (
        <p>No completed incidents yet.</p>
      ) : (
        <table className="incident-history-table">
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Reporter</th>
              <th>Type</th>
              <th>Location</th>
              <th>Response Team</th>
              <th>Resolved On</th>
            </tr>
          </thead>
          <tbody>
            {completedLogs.map(log => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.reporter}</td>
                <td>{log.emergencyType}</td>
                <td>{log.location}</td>
                <td>{log.respondingTeam}</td>
                <td>{new Date(log.timestamp).toLocaleString('en-PH')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
