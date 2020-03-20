# GSoC 2020: Adding statistics and graphs for Listenbrainz users and community

# Personal Information
- Name: Ishaan Shah
- IRC Nick: ishaanshah
- Email: ishaan.n.shah@gmail.com
- Github: https://github.com/ishaanshah
- Website: https://ishaanshah.github.io
- Time Zone: UTC+530

# Project Overview
ListenBrainz now has a statistics infrastructure that collects and computes statistics from the listen data that have been stored in the database. Right now, the only information a user gets about his/her listening trends is a list of recent listens and top artists. This project aims to change this by serving interesting graphs and statistics that would more helpful to the user.

# Graphs and Statistics which can be shown
We can classify the graphs to be shown in two different categories:

## User Statistics
These graphs tell the user about his/her listening history and habits.<br>
- **Listening Activity**: The number of listens submitted to ListenBrainz in the last week/month/year.
- **Top Artist**: The top artists that the user has listened to.
- **Top Albums**: The top releases that the user has listened to.
- **Top Songs**: The top songs that the user has listened to.
- **Daily Activity**: This graph shows the user activity during the day.
- **Artist Origins**: A map showing the locations of artists to which the user listens to.

## Sitewide Statistics
These graphs tell about the sitewide trending artists, albums, and songs. This data can also be used to calculate the popularity of the entities. Other than that, graphs can be made to show the overall activity on the website like cumulative listens submitted, listens submitted per day.

# UI Mockups
This project will add three new views to serve the statistics that are being generated.

## User statistics
[UI Prototype](https://www.figma.com/proto/qXJTaGsrjmzBFVztScyINF/Stats?node-id=2%3A3&scaling=min-zoom)<br>
This view contains all the graphs and statistics that have been described in the User Statistics section. The artist origin map is an interactive map similar to that shown over [here](https://geoffboeing.com/share/projects/leaflet-lastfm-artists/lastfm-artists-map.html).

## User listen history
[UI Prototype](https://www.figma.com/proto/3ugc7cWUAlKqBawNVOnoSU/History?scaling=min-zoom&node-id=1%3A2)<br>
This view shows a paginated list of the artists/recordings/releases that the user has listened to in a given range of dates.

## Sitewide statistics
[UI Prototype](https://www.figma.com/proto/paVt1kzikbX17DjYpsRNQ5/Statistics?scaling=min-zoom&node-id=2%3A0)<br>
This view shows the top 10 artists/recordings/releases that all ListenBrainz users are listening to. Moreover, the Listen Count shown on the homepage will be replaced by a graph showing the cumulative listens submitted to ListenBrainz over the last month.

# Implementation
## Front End
ListenBrainz uses ReactJS for implementing UI components. I intend to use `nivo`, a React based charting library built using `d3.js` for rendering various visualizations. Some of the code used to build graphs for the mock UI can be found [here](https://github.com/ishaanshah/GSoC-Proposal/tree/master/graph_designs/src).

## Back End
Currently, listens are imported into Spark on the 8th and 22nd of every month. However, for the dynamic generation of graphs and statistics, the frequency of imports has to be increased. The listens should be imported every day at midnight, which means incremental data dumps have to be made every day.<br><br>
The data required to display the `Listen Activity` graph `Top Artist/Recording/Release` is easy to calculate. This data will be calculated only when the user visits the statistics page. Once calculated the data would be stored in Redis cache for faster retrieval in future.<br><br>
The data for displaying `Daily Activity` is not easy to calculate. This data will be generated weekly and only for active users of the website. As this data will be calculated only once per week, it has to be stored in table.<br><br>
The `Artist Origin` map is a bit difficult to implement as we have to query the MusicBrainz database to get the artist's origin and then geocode it using Google Maps/OpenStreetMap API. This data will be calculated twice/once in a month, depending upon the efficiency of this process. A local cache can be created which maps various artists to their origin and be stored in the HDFS. This will make subsequent queries to get a particular artist's origin faster. The overall flow of the above process is shown in the figure -
![Artist Origin Flow](https://raw.githubusercontent.com/ishaanshah/GSoC-Proposal/master/Flow_Diagrams/Artist%20Origin.png?token=AGAIMSCJLBT3EI2F5VQKFCC6PXDWS "Artist Origin Flow")

### Redis cache
To improve the page loading time, we have to cache the results that we get from Spark in memory. This can be done using Redis. An example request for getting data for `Listen Activity` will be,
```javascript
"stats.user.listen_activity": {
  "name": "stats.user.listen_activity",
  "description": "Listening activity of user",
  "params": ["musicbrainz_id", "from", "to"]
}
```
We can **hash** the request JSON and use it as key to store the result for the query and quickly retrieve it later if the same query is made. Also, an entry stored in the cache will have a limited lifetime, after which it will be removed. This will ensure that the data gets updated after a suitable interval. The flow for the process is shown in the figure.
![Query Caching](https://raw.githubusercontent.com/ishaanshah/GSoC-Proposal/master/Flow_Diagrams/Request%20Stats.png?token=AGAIMSEJIVCJNS25D2VPQRC6PXHVU "Query Caching")

# Timeline
Here is a more detailed week-by-week timeline of the 13 weeks GSoC coding period to keep me on track
## Community Bonding Period
I will use this time to discuss implementation details with mentors. I will start configuring the ListenBrainz server and the Spark server to start generating statistics.
## Week 1-2
Finalize and implement the UI for displaying user and sitewide statistics(except `Artist Origins`) and write tests.
## Week 3
Start working on the generation of user statistics.
## Week 4 (Phase 1 evaluations here)
Complete user statistics.
## Week 5
Write tests for user statistics generation. Refactor the code written before based upon feedback from mentors in evaluation.
## Week 6
Implement `Redis Cache` and write tests
## Week 7
Implement sitewide statistics.
## Week 8 (Phase 2 evaluations here)
Start writing scripts to get information about the artist's origin from MusicBrainz and geocoding it.
## Week 9
Work on UI for `Artist Origin`. Refactor the code written before based upon feedback from mentors in evaluation.
## Week 10-11
Write backend code for `Artist Origin`.
## Week 12-13
Buffer Period. Work on optional ideas.

# After GSoC / Optional Ideas
I will like to continue working with ListenBrainz after Summer of Code. This project aims at setting up basic architecture for generating statistics with Apache Spark. The addition of more statistics will be relatively easy.
## AcousticBrainz integration
AcousticBrainz provides a lot of useful information such as **Danceability**, **BPM** and the general **Tone** of a recording. This can be used to provide insightful information about users listening habits and can be used by the recommendation engine.
## Entity Graphs
These graphs will show details about various entities like artists, recordings and releases.

# About Me
I am a first year student at the International Institute of Information Technology, Hyderabad. I started working with ListenBrainz since January and have learned quite a few things along the way. You can find the list of Pull Requests that I have made over [here](https://github.com/metabrainz/listenbrainz-server/pulls?q=author%3Aishaanshah).

## Question: Tell us about the computer(s) you have available for working on your SoC project!
I have a HP laptop with an i5 Intel processor, and 8 GB RAM running Arch Linux. I also have a desktop computer with an i7 Intel processor, GTX 960 Graphics card, and 8 GB RAM running Arch Linux.

## Question: When did you first start programming?
I have been programming since 10th grade. I started with C/C++ but now mostly code in Python and JavaScript.

## Question: What type of music do you listen to?
I am a die-hard fan of [Coldplay](https://www.coldplay.com). Other than that, I like listening to songs by [Maroon 5](https://maroon5.com), [Lenka](https://lenkamusic.com), and [The Local Train](https://www.facebook.com/TheLocalTrain/).

## Question: What aspects of ListenBrainz interest you the most?
I am a big fan of Open Source software. ListenBrainz is an Open Source alternative to [last.fm](https://www.last.fm)

## Question: Have you ever used MusicBrainz to tag your files?
I have used MusicBrainz Picard to tag my music collection.

## Question: Have you contributed to other Open Source projects? If so, which projects, and can we see some of your code?
ListenBrainz is the first open source organization that I have contributed to. However, I have done some other projects that can be seen on my [Github](https://github.com/ishaanshah) Page.

## Question: What sorts of programming projects have you done on your own time?
I wrote a bot that solved the [Eight Puzzle](https://github.com/ishaanshah/Eight-Solver) as the final project for [CS50](cs50.harvard.edu). Recently I also worked on the platform used for [Botomania](https://github.com/arpan-dasgupta/botomania-felicity-2020), an onsite contest held at my college.

## Question: How much time do you have available, and how would you plan to use it?
I plan to work for 35-45 hours per week as I would have holidays during most of the coding period.

## Question: Do you plan to have a job or study during the summer in conjunction with Summer of Code?
I have no plans for having a job during the summer.
