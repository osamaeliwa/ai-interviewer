// ============================================
// PASTE THIS IN YOUR GOOGLE SHEET APPS SCRIPT
// (Extensions > Apps Script > replace all code)
// Then: Deploy > New Deployment > Web App
//   - Execute as: Me
//   - Who has access: Anyone
// ============================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Interview ID',
        'Timestamp',
        'Language',
        'Question #',
        'Question',
        'Answer',
        'Is Follow-up',
        'Parent Question #'
      ]);
      // Bold the header row
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
    }

    var interviewId = data.interviewId;
    var timestamp = data.timestamp;
    var language = data.language;

    // Write each question/answer as a row
    data.responses.forEach(function(item) {
      // Main question
      sheet.appendRow([
        interviewId,
        timestamp,
        language,
        item.questionNumber,
        item.question,
        item.answer,
        'No',
        ''
      ]);

      // Follow-up questions
      if (item.followUps && item.followUps.length > 0) {
        item.followUps.forEach(function(fu) {
          sheet.appendRow([
            interviewId,
            timestamp,
            language,
            item.questionNumber,
            fu.question,
            fu.answer,
            'Yes',
            item.questionNumber
          ]);
        });
      }
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Interview API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
