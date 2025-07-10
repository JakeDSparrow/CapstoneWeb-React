import React from 'react';

function TeamOrganizerView({ teams, openTeamEditor }) {
  return (
    <div>
      <h2>Team Organizer</h2>
      <div className="teams-container">
        {Object.entries(teams).map(([teamName, members]) => (
          <div key={teamName} className="team-card">
            <div className="team-card-header">
              <h3>Team {teamName.charAt(0).toUpperCase() + teamName.slice(1)}</h3>
              <button className="edit-button" onClick={() => openTeamEditor(teamName)}>
                Edit Team
              </button>
            </div>
            <div className="team-card-body">
              {members.length === 0 ? (
                <p className="no-members"><em>No members</em></p>
              ) : (
                <ul>
                  {members.map((member, idx) => <li key={idx}>{member}</li>)}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamOrganizerView;
