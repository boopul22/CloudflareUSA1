/**
 * Google Apps Script — paste this into your Google Sheet's script editor.
 *
 * Setup:
 * 1. Open your Google Sheet → Extensions → Apps Script
 * 2. Replace the default code with this file's contents
 * 3. Click Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web app URL and set it as VITE_GOOGLE_SHEET_URL in your .env.local
 *
 * IMPORTANT: After updating this script, you must create a NEW deployment
 * (Deploy → New deployment) for changes to take effect.
 */

// Optional: set to an email address to receive notifications on each submission
var NOTIFICATION_EMAIL = 'help@autoclaimfiling.online';

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp (UTC)',
        'Timestamp (Local)',
        'IP Address',
        'Name',
        'Phone',
        'Email',
        'State',
        'Message',
        'Consent Group',
        'TCPA Consent',
        'Sensitive Data Consent',
        'WA Health Consent',
        'User Agent'
      ]);
      // Bold the header row
      sheet.getRange(1, 1, 1, 13).setFontWeight('bold');
    }

    // Server-side timestamp formatted for readability
    var serverTimestamp = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone(),
      'yyyy-MM-dd HH:mm:ss z'
    );

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),   // UTC from browser
      serverTimestamp,                                // Server local time
      data.ip_address || '',
      data.name || '',
      data.phone || '',
      data.email || '',
      data.state || '',
      data.message || '',
      data.consent_group || '',
      data.tcpa_consent || '',
      data.sensitive_data_consent || '',
      data.wa_health_consent || '',
      data.user_agent || ''
    ]);

    // Optional email notification
    if (NOTIFICATION_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: 'New Claim Request - Autoclaimfiling.online',
        htmlBody:
          '<h2>New Contact Form Submission</h2>' +
          '<table border="1" cellpadding="8" style="border-collapse:collapse">' +
          '<tr><td><b>Timestamp</b></td><td>' + serverTimestamp + '</td></tr>' +
          '<tr><td><b>IP Address</b></td><td>' + (data.ip_address || 'N/A') + '</td></tr>' +
          '<tr><td><b>Name</b></td><td>' + (data.name || '') + '</td></tr>' +
          '<tr><td><b>Phone</b></td><td>' + (data.phone || '') + '</td></tr>' +
          '<tr><td><b>Email</b></td><td>' + (data.email || '') + '</td></tr>' +
          '<tr><td><b>State</b></td><td>' + (data.state || '') + '</td></tr>' +
          '<tr><td><b>Message</b></td><td>' + (data.message || '') + '</td></tr>' +
          '<tr><td><b>Consent Group</b></td><td>' + (data.consent_group || '') + '</td></tr>' +
          '<tr><td><b>TCPA Consent</b></td><td>' + (data.tcpa_consent || '') + '</td></tr>' +
          '<tr><td><b>Sensitive Data Consent</b></td><td>' + (data.sensitive_data_consent || '') + '</td></tr>' +
          '<tr><td><b>WA Health Consent</b></td><td>' + (data.wa_health_consent || '') + '</td></tr>' +
          '</table>'
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
