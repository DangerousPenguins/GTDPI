javascript:

/* GMailThis-DPI v2.0.2
   Bookmarklet that makes it easy to email the current page one is on. 
   It automatically opens a popup window for a Gmail composition. 
   It also automatically fills out the subject with the page's title 
   and the body with the link. If one selects text, it will also 
   be put in the body of the message. 
   At the top of the bookmarklet, one can also enter an email address
   that will automatically appear in the 'To' field. */


/* Leave blank for no automatic 'To' address */
targetEmailAddress = '';

/* Grab the current text selection if it exists */
selectedText = '';
if (document.selection) {
	selectedText = document.selection.createRange().text;
} 
else if (window.getSelection) {
	selectedText = window.getSelection();
} 
else if (document.getSelection) {
	selectedText = document.getSelection();
}

/* Setup the GMail field data */
gmailURL = "https://mail.google.com/mail?view=cm&ui=1&tf=0&";
targetEmailAddress = encodeURI(targetEmailAddress);
emailSubject = encodeURI(document.title);
emailBody= encodeURI(selectedText +'\n\n' + location.href);

/* Open the GMail window */
gmailPopupWindow = window.open(gmailURL + 'to=' + targetEmailAddress + 
	   '&su='+ emailSubject + ' --- (bookmark)' + '&body=' + emailBody,
	   'gmailForm', 'scrollbars=yes, width=680, height=510, top=175, left=75, status=no, resizable=yes');

/* Focus on the window through a short timeout*/	   
focusTimeout = setTimeout('gmailPopupWindow.focus()',50);
void(0);
