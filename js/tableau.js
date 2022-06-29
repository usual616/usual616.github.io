function initViz() {
    var containerDiv = document.getElementById("tableauViz"),
    url = "https://public.tableau.com/views/_16565184763270/sheet4?:language=zh-TW&publish=yes&:display_count=n&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}
