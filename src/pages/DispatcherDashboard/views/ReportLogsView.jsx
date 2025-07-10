import React from 'react';

export default function ReportLogsView({ reportLogs, formatDateTime }) {
  return (
    <div>
      <h2>Report Logs</h2>
      {reportLogs.length === 0 ? (
        <p>No report logs available.</p>
      ) : (
        <table className="report-logs-table">
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Reporter</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Emergency Type</th>
              <th>Response Team</th>
              <th>Status</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {reportLogs.map((log, idx) => (
              <tr key={idx}>
                <td>{log.id}</td>
                <td>{log.reporter}</td>
                <td>{log.contact}</td>
                <td>{log.location}</td>
                <td>{log.emergencyType}</td>
                <td>{log.respondingTeam}</td>
                <td>{log.status}</td>
                <td>{formatDateTime(log.timestamp)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
