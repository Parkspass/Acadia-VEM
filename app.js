/*jshint esversion: 6 */
console.log('connected');

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        page: 'main',
        trails: ['1', '2'],

        currentName: 'Staff/Vip Name(s)',
        currentDate: '',
        currentTrail: 'Trail or Segment Name',
        currentWeather: 'Weather',
        currentNotes: 'Notes',
        currentVisitation: 'Visitation',
        currentStatus: 'Trail Status',
        currentCondition: 'Trail Conditions',

        name_selected: false,
        date_selected: false,
        trail_selected: false,
        walk_selected: true,
        run_selected: false,
        bike_selected: false,
        e_selected: false,
        horse_selected: false,
        dog_selected: false,
        weather_selected: false,
        notes_selected: false,
        visitation_selected: false,
        status_selected: false,
        condition_selected: false,

        walkUp: 0,
        walkDown: 0,
        runUp: 0,
        runDown: 0,
        bikeUp: 0,
        bikeDown: 0,
        eUp: 0,
        eDown: 0,
        horseUp: 0,
        horseDown: 0,
        dogUp: 0,
        dogDown: 0,

        walkRotation: 180,
        runRotation: 0,
        bikeRotation: 0,
        eRotation: 0,
        horseRotation: 0,
        dogRotation: 0,
    },
    created: function(){
        this.loadDate();
    },
    methods: {
        // INPUTS
        loadDate: function(){
            var date = new Date();
            var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

            var fulldate = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
            this.currentDate = fulldate;
        },
        nameClicked: function(){
            this.name_selected = true;
            if (this.currentName == "Staff/Vip Name(s)"){
                this.currentName = "";
            }
        },
        outsideName: function(){
            this.name_selected = false;
            if(this.currentName == ""){
                this.currentName = "Staff/Vip Name(s)";
            }
        },
        trailClicked: function(){
            this.page = "trailSelect";
        },
        outsideTrail: function(){
            this.trail_selected = false;
            if(this.currenttrail == ""){
                this.currenttrail = "Trail or Segment Name";
            }
        },

        // BUTTONS
        walkingClicked: function(){
            if (this.walk_selected == true){
                this.walk_selected = false;
                this.walkRotation = 0;
            }else{
                this.walk_selected = true;
                this.walkRotation = 180;
            }
        },
        runningClicked: function(){
            if (this.run_selected == true){
                this.run_selected = false;
                this.runRotation = 0;
            }else{
                this.run_selected = true;
                this.runRotation = 180;
            }
        },
        bikeClicked: function(){
            if (this.bike_selected == true){
                this.bike_selected = false;
                this.bikeRotation = 0;
            }else{
                this.bike_selected = true;
                this.bikeRotation = 180;
            }
        },
        eClicked: function(){
            if (this.e_selected == true){
                this.e_selected = false;
                this.eRotation = 0;
            }else{
                this.e_selected = true;
                this.eRotation = 180;
            }
        },
        horseClicked: function(){
            if (this.horse_selected == true){
                this.horse_selected = false;
                this.horseRotation = 0;
            }else{
                this.horse_selected = true;
                this.horseRotation = 180;
            }
        },
        dogClicked: function(){
            if (this.dog_selected == true){
                this.dog_selected = false;
                this.dogRotation = 0;
            }else{
                this.dog_selected = true;
                this.dogRotation = 180;
            }
        },
    },
});

