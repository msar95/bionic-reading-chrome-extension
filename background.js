// WIP

// let isActive = false;
// let scriptDetails = null;
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     console.log("3");
//     if (message.action === "activate") {
//         isActive = true;
//         console.log("Extension activated");
//         activateExtension();
//     } else if (message.action === "deactivate") {
//         isActive = false;
//         console.log("Extension deactivated");
//         deactivateExtension();
//     }
// });
//
// function activateExtension() {
//     console.log("activate Extension triggered", isActive);
//     // Inject the content script when activated
//     if (isActive) {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             const tabId = tabs[0].id;
//             console.log("Executing content script 1", tabId);
//
//             chrome.scripting.executeScript({
//                 target: { tabId: tabId },
//                 func: modifyTextInParagraphs
//             });
//         });
//     }
// }
//
// function deactivateExtension() {
//     if (scriptDetails) {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             const tabId = tabs[0].id;
//
//             chrome.scripting.removeScript(scriptDetails);
//             scriptDetails = null;
//             console.log("Content script removed");
//         });
//     }
// }
