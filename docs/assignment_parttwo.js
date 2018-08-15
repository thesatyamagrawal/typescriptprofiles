var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(videoTitle, description, category, views, likes, dislikes, comments) {
        var _this = this;
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getNumberOfViews = function () {
            return _this.views;
        };
        this.getNumberOfLikes = function () {
            return _this.likes;
        };
        this.getNumberOfDislikes = function () {
            return _this.dislikes;
        };
        this.getNumberOfComments = function () {
            return _this.comments;
        };
        this.getRelatedVideos = function () {
            console.log("No Videos to show");
        };
        this.autoPlay = function () {
            console.log("Autoplay not available");
        };
        this.videoTitle = videoTitle;
        this.description = description;
        this.category = category;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
    }
    return YoutubeVideo;
}());
var edwisor = new YoutubeVideo("Afreen Afreen", "Afreen Afreen, Rahat Fateh Ali Khan & Momina Mustehsan", "Coke Studio Season 9", 98756777, 1772, 976, 765);
var title = edwisor.getVideoTitle();
console.log(title);
var description = edwisor.getDescription();
console.log(description);
var category = edwisor.getCategory();
console.log(category);
var views = edwisor.getNumberOfViews();
console.log(views);
var likes = edwisor.getNumberOfLikes();
console.log(likes);
var dislikes = edwisor.getNumberOfDislikes();
console.log(dislikes);
var comments = edwisor.getNumberOfComments();
console.log(comments);
var relatedVideos = edwisor.getRelatedVideos();
relatedVideos;
var autoPlay = edwisor.autoPlay();
autoPlay;
