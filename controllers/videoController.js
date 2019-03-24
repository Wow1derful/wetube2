export const home = (req, res) => res.render("Home", { pageTile: "Home"});
export const search = (req, res) => 
    res.render("Search", { pageTile: "Search"});
export const upload = (req, res) => 
    res.render("Upload", { pageTile: "Upload"});
export const videoDetail = (req, res) => 
    res.render("Video Detail", { pageTile: "Video Detail"});
export const editVideo = (req, res) => 
    res.render("Edit Video", { pageTile: "Edit Video"});
export const deleteVideo = (req, res) => 
    res.render("Delete Video", { pageTile: "Delete Video"});