import React from 'react';

function TeamOrganizerView({ teams, openTeamEditor }) {
  return (
    <div>
      <h2>Team Organizer</h2>
      <div className="teams-container">
        {Object.entries(teams).map(([teamName, members]) => (
          <div key={teamName} className="team-card">
            <h3>{teamName.charAt(0).toUpperCase() + teamName.slice(1)} Team</h3>
            <ul>
              {members.length === 0 ? (
                <li><em>No members</em></li>
              ) : (
                members.map((member, idx) => <li key={idx}>{member}</li>)
              )}
            </ul>
            <button className="edit-button" onClick={() => openTeamEditor(teamName)}>
              Edit Team
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamOrganizerView; // Explicit default export