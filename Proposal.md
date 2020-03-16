# GSoC 2020: Adding statistics and graphs for Listenbrainz users and community

# Personal Information
- Name: Ishaan Shah
- IRC Nick: ishaanshah
- Email: ishaan.n.shah@gmail.com
- Github: https://github.com/ishaanshah
- Website: https://ishaanshah.github.io
- Time Zone: UTC+530

# Project Overview
ListenBrainz now has a statistics infrastructure that collects and computes statistics from the listen data that have been stored in the database. Right now the only information an user gets about his/her listening trends is a list of recent listens and top artists. This project aims to change this by serving interesting graphs and statistics that would more helpful to the user.

The current generation of statistics takes place in the following manner
## Todo: Place the data flow diagram over here

To implement other kinds of graphs some changes have to be made to the database schema and the data flow
## Todo: Figure out the backend an put it over here

# Graphs and Statistics which can be shown
The graphs to be shown can be classified into two different catagories:

## User Statistics
These graphs tell the user about his/her listening history and habits.<br>
The graphs that can be shown in this section are
- **Listening Activity**: The number of listens submitted to listenbrainz in the last week/month/year.
- **Top Artist**: The top artists that the user has listened to.
- **Top Albums**: The top releases that the user has listened to.
- **Top Songs**: The top songs that the user has listened to.
- **Daily Activity**: This graph shows when the user is most active during the day.

## Sitewide Statistics
These graphs tell about the sitewide trending artists, albums and songs. This data can also be used to calculate the popularity of the entities. Other than that graphs can be made to show the overall activity on the website, i.e the number of listens submitted by all users in the last month.

# About Me
I am a first year student at International Institute of Information Technology, Hyderabad. I started working with ListenBrainz since January and have learnt quite a few things along the way. You can find the list of Pull Requests that I have made over [here](https://github.com/metabrainz/listenbrainz-server/pulls?q=author%3Aishaanshah).

## Question: Tell us about the computer(s) you have available for working on your SoC project!
I have a HP laptop with an i5 Intel processor and 8 GB RAN running Arch Linux. I also have a desktop computer with an i7 Intel processor, GTX 960 Graphics card and 8 GB RAM running Arch Linux.

## Question: When did you first start programming?
I have been programming since 10th grade. I started out with C/C++ but now mostly code in Python and JavaScript.

## Question: What type of music do you listen to?
I am a die hard fan of [Coldplay](https://www.coldplay.com). Other than that I like listening to songs by [Maroon 5](https://maroon5.com), [Lenka](https://lenkamusic.com) and [The Local Train](https://www.facebook.com/TheLocalTrain/).

## Question: What aspects of ListenBrainz interest you the most?
TODO

## Question: Have you ever used MusicBrainz to tag your files?
I have used MusicBrainz Picard to tag my music collection.

## Question: Have you contributed to other Open Source projects? If so, which projects and can we see some of your code?
ListenBrainz is the first open source organization that I have contributed to. However I have done some other projects that can be seen on my [Github](https://github.com/ishaanshah) Page.

## Question: What sorts of programming projects have you done on your own time?
I wrote a bot which solved the [Eight Puzzle](https://github.com/ishaanshah/Eight-Solver) as the final project for [CS50](cs50.harvard.edu). Recently I also worked on the platform used for [Botomania](https://github.com/arpan-dasgupta/botomania-felicity-2020), an onsite contest held at my college.

## Question: How much time do you have available, and how would you plan to use it?
I plan to work for 35-45 hours per week as I would have holidays during most of the coding period.

## Question: Do you plan to have a job or study during the summer in conjunction with Summer of Code?
I have no plans for having a job during the summer, but my college semester might extended by 2-3 weeks because of the nationwide shutdown due to Corona Virus.
