/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
  // This automatically imports your movies.json file and puts it into
  //   the variable: movies
  created() {
    fetch('movies.json').then(response => response.json()).then(json => {
      this.movies = json
    })
  },
  data() {
    return {
      // This holds your movies.json data.
      movies: [],
      /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
      title: "IMDB + Charlie Scotts Top 8 Movies",
      owner: "Charlie Scott",
      github: "https://github.com/CharlieScott4/Scott---P3",

    }
  },
  methods: {
    /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
    getMonthText(dateArray) {
      switch (dateArray[1]) {
        case 1:
          dateArray[1] = "January";
          break;
        case 2:
          dateArray[1] = "February";
          break;
        case 3:
          dateArray[1] = "March";
          break;
        case 4:
          dateArray[1] = "April";
          break;
        case 5:
          dateArray[1] = "May";
          break;
        case 6:
          dateArray[1] = "June";
          break;
        case 7:
          dateArray[1] = "July";
          break;
        case 8:
          dateArray[1] = "August";
          break;
        case 9:
          dateArray[1] = "September";
          break;
        case 10:
          dateArray[1] = "October";
          break;
        case 11:
          dateArray[1] = "November";
          break;
        case 12:
          dateArray[1] = "December";
          break;
      }

      return dateArray[1] + " , " + dateArray[2] + " , " + dateArray[0];

    },
    posterClick(index) {


      if (this.movies[index].posterindex < this.movies[index].posters.length - 1) {
        this.movies[index].posterindex++;
      }
      else {
        this.movies[index].posterindex = 0;
      }
    },
    timeText(minutes) {
      let hour = Math.trunc(minutes / 60);
      let remainder = Math.trunc(minutes % 60);
   return  hour + " hours " + remainder + " minutes";
    }



  }
})





vue_app.mount("#vue_app")

