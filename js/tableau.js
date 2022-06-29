function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/_16549482335250/sheet4_1?:language=zh-TW&:display_count=n&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}