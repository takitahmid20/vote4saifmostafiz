// Update your Google Apps Script with this code

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1SvgqyQd7j0BBFjm9b8r1hZS9FVEs5LDyYiif-TaEhKA').getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add timestamp and data to sheet
    sheet.appendRow([
      new Date(),
      data.name,
      data.phone,
      data.address,
      data.manifesto
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.openById('1SvgqyQd7j0BBFjm9b8r1hZS9FVEs5LDyYiif-TaEhKA').getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    // Skip header row and format data
    const submissions = [];
    for (let i = 1; i < data.length; i++) {
      submissions.push({
        timestamp: Utilities.formatDate(new Date(data[i][0]), 'GMT+6', 'dd/MM/yyyy HH:mm'),
        name: data[i][1],
        phone: data[i][2],
        address: data[i][3],
        manifesto: data[i][4]
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      data: submissions
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
