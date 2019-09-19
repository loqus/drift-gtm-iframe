<script>
/* Drift chat is loaded in an iframe, the GTM object is in the parent element so the datalayer needs to be triggered in the parent element.*/

window.dataLayer = window.dataLayer || []
parent.dataLayer = parent.dataLayer || []
window.drift.on('ready',function(api){ 
  window.drift.on('message:sent',function(event){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'message sent', 
              'eventLabel': 'drift>message sent conversation id: ' + event.conversationId
          });
    } 
  })
  
  window.drift.on('startConversation',function(event){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'start conversation', 
              'eventLabel': 'drift>start conversation id: ' + event.conversationId
          });
    } 
  })
  
    window.drift.on('emailCapture',function(event){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'email capture', 
              'eventLabel': 'drift>email capture'
          });
    } 
  })
  
  window.drift.on('welcomeMessage:open',function(e){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'welcome message open', 
              'eventLabel': 'drift>welcome message open'
          });
    } 
  }) 
  
    window.drift.on('welcomeMessage:close',function(e){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'welcome message closed', 
              'eventLabel': 'drift>welcome message closed'
          });
    } 
  }) 
  
  window.drift.on('sidebarOpen',function(e){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'sidebar open', 
              'eventLabel': 'drift>sidebar open'
          });
    } 
  }) 

  window.drift.on('sidebarClose',function(e){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'sidebar close', 
              'eventLabel': 'drift>sidebar close'
          });
    } 
  })  
  
  window.drift.on('campaign:open',function(event){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'campaign open', 
              'eventLabel': 'drift>campaign open id: ' + event.campaignId
          });
    } 
  })
  
    window.drift.on('campaign:dismiss',function(event){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'campaign dismiss', 
              'eventLabel': 'drift>campaign dismiss id: ' + event.campaignId
          });
    } 
  })
  
  window.drift.on('campaign:click',function(event){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'campaign click', 
              'eventLabel': 'drift>campaign click id: ' + event.campaignId
          });
    } 
  })
  
  window.drift.on('campaign:submit',function(event){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'campaign submit', 
              'eventLabel': 'drift>campaign submit id: ' + event.campaignId
          });
    } 
  })
  
  window.drift.on('scheduling:meetingBooked',function(event){ 
    { 
	   parent.dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'drift widget', 
              'eventAction': 'meeting booked', 
              'eventLabel': 'drift>meeting booked'
          });
    } 
  })
  
})
</script>
