function loadScores() {
    let scores = [];
    const scoresInfo = localStorage.getItem('scores');
    if (scoresInfo) {
      scores = JSON.parse(scoresInfo);
    }
  
    const scoresTable = document.querySelector('#scores');
  
    if (scores.length > 0) {
      for (const [i, score] of scores.entries()) {
        const newPositionCell = document.createElement('td');
        const newNameCell = document.createElement('td');
        const newScoreCell = document.createElement('td');
        const newDateCell = document.createElement('td');
  
        newPositionCell.textContent = i + 1;
        newNameCell.textContent = score.name;
        newScoreCell.textContent = score.score;
        newDateCell.textContent = score.date;
  
        const tableRow = document.createElement('tr');
        tableRow.appendChild(newPositionCell);
        tableRow.appendChild(newNameCell);
        tableRow.appendChild(newScoreCell);
        tableRow.appendChild(newDateCell);
  
        scoresTable.appendChild(rowEl);
      }
    } else {
      scoresTable.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
  }
  
  loadScores();
  