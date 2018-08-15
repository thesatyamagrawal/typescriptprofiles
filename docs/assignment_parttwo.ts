class YoutubeVideo{

    videoTitle : string;
    description : string;
    category : string;
    views : number;
    likes : number;
    dislikes : number;
    comments : number;

    constructor(videoTitle : string, description : string,category : string, views : number,likes : number, dislikes : number, comments : number){
        this.videoTitle = videoTitle;
        this.description = description;
        this.category = category
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
        
    }

    getVideoTitle = () =>{
        return this.videoTitle;
    }

    getDescription = () =>{
        return this.description;
    }

    getCategory = () =>{
        return this.category;
    }

    getNumberOfViews = () =>{
        return this.views;
    }

    getNumberOfLikes = () =>{
        return this.likes;
    }

    getNumberOfDislikes = () =>{
        return this.dislikes;
    }

    getNumberOfComments = () =>{
        return this.comments;
    }

    getRelatedVideos = () =>{
        console.log("No Videos to show");
    }

    autoPlay = () =>{
        console.log("Autoplay not available");
    }

}

let edwisor = new YoutubeVideo("Afreen Afreen","Afreen Afreen, Rahat Fateh Ali Khan & Momina Mustehsan","Coke Studio Season 9",98756777,1772,976,765)

let title = edwisor.getVideoTitle();
console.log(title);

let description = edwisor.getDescription();
console.log(description);

let category = edwisor.getCategory();
console.log(category);

let views = edwisor.getNumberOfViews();
console.log(views);

let likes = edwisor.getNumberOfLikes();
console.log(likes);

let dislikes = edwisor.getNumberOfDislikes();
console.log(dislikes);

let comments = edwisor.getNumberOfComments();
console.log(comments);

let relatedVideos = edwisor.getRelatedVideos();
relatedVideos;

let autoPlay = edwisor.autoPlay();
autoPlay;