var SocialProfile = /** @class */ (function () {
    function SocialProfile(name, email, friends, education, bday, age, phone) {
        var _this = this;
        this.getName = function () {
            return _this.personname;
        };
        this.getEmail = function () {
            return _this.emailid;
        };
        this.getEducationDetails = function () {
            return _this.education;
        };
        this.getBirthDate = function () {
            return _this.birthday;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getPhoneNumber = function () {
            return _this.phoneno;
        };
        this.getNumber0fFriends = function () {
            return _this.friendscount;
        };
        this.getpostsliked = function () {
            console.log("No Likes");
        };
        this.getinterests = function () {
            console.log("No Interests");
        };
        this.personname = name;
        this.friendscount = friends;
        this.education = education;
        this.birthday = bday;
        this.age = age;
        this.phoneno = phone;
        this.emailid = email;
    }
    return SocialProfile;
}());
var user = new SocialProfile("Satyam", "agrawalsaty@gmail.com", 4, "Sasa", "7/08/1900", 209, 9997676668);
var thename = user.getName();
console.log(thename);
var email = user.getEmail();
console.log(email);
var friends = user.getNumber0fFriends();
console.log(friends);
var education = user.getEducationDetails();
console.log(education);
var birth = user.getBirthDate();
console.log(birth);
var age = user.getAge();
console.log(age);
var phone = user.getPhoneNumber();
console.log(phone);
var likedPosts = user.getpostsliked();
likedPosts;
var interests = user.getinterests();
interests;
