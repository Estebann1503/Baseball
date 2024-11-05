new Vue({
    el: '#app',
    data: {
        atBats: 0,
  bRuns: 0,
  bWalks: 0,
        hits: 0,
  double: 0,
  triple: 0,
  homeRun: 0,
  rbi: 0,
        inningsPitched: 0,
        pHits: 0,
  pWalks: 0,
        pRuns: 0,
        earnedRuns: 0,
  hbp,
  sacFlys
  
    }, 

    computed: {
        battingAve() {
    // maybe a better way to not show NaN on load?
            return this.hits / this.atBats || " "
        }, 

        era() {
    // maybe a better way to not show NaN on load?
            return this.earnedRuns / this.inningsPitched * 9 || " "
        },
  
  whip() {
    
   var whip = (this.pWalks + this.pHits) / this.inningsPitched;
    return (whip) || " "
  }, 
  
  onBasePact(){
    var obp = (this.hits + this.bWalks + this.hbp) / (this.atBats + this.bWalks + this.hbp + this.sacFlys);
    console.log(obp);
    return obp || " "
  }
    }
})


