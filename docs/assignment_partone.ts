class SocialProfile{

    personname : string;
    emailid : string;
    friendscount : number;
    education : string;
    birthday : string;
    age : number;
    phoneno : number;

    constructor(name : string,
        email : string,
        friends : number,
        education : string,
        bday : string,
        age : number,
        phone : number){
        this.personname = name;
        this.friendscount = friends;
        this.education = education;
        this.birthday = bday;
        this.age = age;
        this.phoneno = phone;
        this.emailid = email
    }

    getName = () =>{
        return this.personname;
    }

    getEmail = () =>{
        return this.emailid;
    }

    getEducationDetails = () =>{
        return this.education;
    }

    getBirthDate = () =>{
        return this.birthday;
    }

    getAge = () =>{
        return this.age;
    }

    getPhoneNumber = () =>{
        return this.phoneno;
    }

    getNumber0fFriends = () =>{
        return this.friendscount;
    }

    getpostsliked = () =>{
        console.log("No Likes");
    }

    getinterests = () =>{
        console.log("No Interests");
    }


}

let user = new SocialProfile("Satyam","agrawalsaty@gmail.com",4,"Sasa","7/08/1900",209,9997676668)

let thename = user.getName();
console.log(thename);

let email = user.getEmail();
console.log(email);

let friends = user.getNumber0fFriends();
console.log(friends);

let education = user.getEducationDetails();
console.log(education);

let birth = user.getBirthDate();
console.log(birth);

let age = user.getAge();
console.log(age);

let phone = user.getPhoneNumber();
console.log(phone);

let likedPosts = user.getpostsliked();
likedPosts;

let interests = user.getinterests();
interests;