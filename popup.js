// Generic function to show alert with custom message
function showAlert(emoji, message) {
  alert(`${emoji} ${message}`);
}

function sendJoin() {
  showAlert("👉", "撥打電話指令已發出（可連接 Join）");
}

function playVoice() {
  showAlert("🔊", "播放語音指令（接 Tasker 語音播放）");
}

function sendSMS() {
  showAlert("💬", "已發送簡訊（或透過 Join 觸發）");
}

