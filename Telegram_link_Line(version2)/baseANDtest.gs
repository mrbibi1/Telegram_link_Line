function base() {
  //前期準備，不懂看README
  var sheet_key = ""; //你的sheet ID
  var doc_key = ""; //你的doc ID
  var Telegram_bot_key = ""; //Telegram bot的token
  var Telegram_id = ""; //你的Telegram帳號ID(要通知你)
  var Line_id = ""; //你的line ID
  var CHANNEL_ACCESS_TOKEN = ''; //你的Line token
  var email = "@gmail.com"; //你的email(祈禱永遠別收到此訊息)
  var FolderId = ""; //你的選擇要存的資料夾(google_grive_FolderId)
  var gsURL = "";  //該gs檔的發布網址
  //前期準備完成!==============================================================
  var base_json = {
    "sheet_key": sheet_key,
    "doc_key": doc_key,
    "Telegram_bot_key": Telegram_bot_key,
    "Telegram_id": Telegram_id,
    "Line_id": Line_id,
    "CHANNEL_ACCESS_TOKEN": CHANNEL_ACCESS_TOKEN,
    "email": email,
    "FolderId": FolderId,
    "gsURL":gsURL
  }
  return base_json
}
//============================================================================
function TTTTTTTT() {
  var base_json = base()
  var sheet_key = base_json.sheet_key
  var doc_key = base_json.doc_key
  var email = base_json.email
  var Telegram_bot_key = base_json.Telegram_bot_key
  var Telegram_id = base_json.Telegram_id
  var Line_id = base_json.Line_id
  var CHANNEL_ACCESS_TOKEN = base_json.CHANNEL_ACCESS_TOKEN;
  var FolderId = base_json.FolderId

  //*//
  //123
  var gsURL = ""
  var Stext = ""
  var response = UrlFetchApp.fetch("https://api.telegram.org/bot"+Stext+"/setWebhook?"+gsURL)
  var responseCode = response.getResponseCode()
  var responseBody = response.getContentText()
  //*/
}
//============================================================================