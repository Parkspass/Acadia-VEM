/*jshint esversion: 6 */
console.log('connected');

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        currentName: 'Staff/Vip Name(s)',
        currentDate: '',
        currentTrail: 'Trail or Segment Name',

        name_selected: false,
        date_selected: false,
        trail_selected: false,
        walk_selected: true,

        walkUp: '0',
        walkDown: '0',

        walkRotation: -90,
    },
    created: function(){
        this.loadDate();
    },
    methods: {
        loadDate: function(){
            var date = new Date();
            var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

            var fulldate = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
            this.currentDate = fulldate;
        },
        walkingClicked: function(){
            console.log("Walking Clicked");
            if (this.walk_selected == true){
                this.walk_selected = false;
                this.walkRotation = 90;
            }else{
                this.walk_selected = true;
                this.walkRotation = -90;
            }
        }
    },
});

