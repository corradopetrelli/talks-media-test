<template>
  <h1>Talks media test</h1>
  <TableComponent :tableData="tableData"/>
</template>

<script>
import TableComponent from './TableComponent.vue'

export default {
  name: 'PageComponent',
  components: {
    TableComponent
  },

  data() {
      return {
        tableData: [
    {
      "id": "8497428944409865626",
      "title": "Taylor Swift - Official Website",
      "url": "https://www.taylorswift.com/",
      "description": "The Official Website of Taylor Swift - Lover Album Out Now! Festival & Concert Details, Ticket Information, Videos, Merchandise & More",
      "body": "You Need To Calm Down\nDkk9gvTmCXY\nYou Need To Calm Down (Lyric Video)\nGWtfOHBF1_w\n(feat. Brendon Urie of Panic! At The Disco)\nFuXNumBwDOM\nTaylor Swift City of Lover Concert - Sunday, May 17 on ABC\nVlyLr1KXN8Q\n2020 Concert and Festival Details\nFighting COVID-19 is an unprecedented challenge for our global community and the safety and wellbeing of fans should always be the top priority.  Health organizations and governments around the world have strongly discouraged large public gatherings for an undetermined period of time. With many events throughout the world already cancelled, and upon direction from health officials in an effort to keep fans safe and help prevent the spread of COVID-19, sadly the decision has been made to cancel all Taylor Swift live appearances and performances this year.\nThe U.S. and Brazil shows will be rescheduled to take place in 2021, with dates to be announced later this year. Tickets held for each of those shows will transfer to a new show date without action on the part of ticket holders.\nFor those who desire refunds for tickets purchased for the U.S. Lover Fest shows, they will be available starting May 1st subject to Ticketmaster terms. Watch for an email from Ticketmaster with instructions on how to request one. For currently available information on all other performance dates, please click the information button under each event below. Thank you so much for understanding. We look forward to seeing you all, happy and healthy, in the future.\nJune 20, 2020",
      "snippet": "The Official Website of <b><b>Taylor Swift</b></b> - Lover Album Out Now! Festival & Concert Details, Ticket Information, Videos, Merchandise & More. You Need To Calm Down.",
      "keywords": "",
      "language": "en",
      "isSafe": true,
      "datePublished": "0001-01-01T00:00:00",
      "provider": {
        "name": "taylorswift",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "image": {
        "url": "http://cache.umusic.com/_sites/_halo/taylorswift/images/meta-image.jpg",
        "height": 0,
        "width": 0,
        "thumbnail": "",
        "thumbnailHeight": 0,
        "thumbnailWidth": 0,
        "base64Encoding": "",
        "name": null,
        "title": null,
        "provider": {
          "name": "taylorswift",
          "favIcon": "",
          "favIconBase64Encoding": ""
        },
        "imageWebSearchUrl": null,
        "webpageUrl": "https://www.taylorswift.com/"
      }
    },
    {
      "id": "4112940645721220964",
      "title": "Taylor Swift Web | Your Online Resource For Everything Taylor Swift | Taylor Swift Web | Your Online Resource For Everything Taylor Swift -",
      "url": "http://taylorswiftweb.net",
      "description": "",
      "body": "",
      "snippet": "",
      "keywords": "",
      "language": "en",
      "isSafe": true,
      "datePublished": "0001-01-01T00:00:00",
      "provider": {
        "name": "taylorswiftweb",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "image": {
        "url": "",
        "height": 0,
        "width": 0,
        "thumbnail": "",
        "thumbnailHeight": 0,
        "thumbnailWidth": 0,
        "base64Encoding": "",
        "name": null,
        "title": null,
        "provider": {
          "name": "taylorswiftweb",
          "favIcon": "",
          "favIconBase64Encoding": ""
        },
        "imageWebSearchUrl": null,
        "webpageUrl": "http://taylorswiftweb.net"
      }
    }
  ]
      }
  }
}
</script>
