var feed = new Instafeed({
    get: 'user',
    userId: '185925004',
    accessToken: '185925004.1677ed0.742e6f4a7e3f4c6fa229bb55d560e7f6',
    template: '<a class="feed-image" href="{{link}}"> <img src="{{image}}" /></a>'
});
feed.run();