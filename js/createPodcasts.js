function makeEpisode(n,t,itL,scL,ytL){
	var episode = {
				number: n,
				title: t,
				//pictureLink: pL,
				itunesLink: itL,
				soundCloudLink: scL,
				youTubeLink: ytL,
			};
	return episode
}

function collectData(){
	var total = [ 
					makeEpisode(1,"#1 - Improving Airbnb and the podcast revolution","https://itunes.apple.com/us/podcast/1-airbnb-and-podcasts/id1232072791?i=1000385581644&mt=2","https://soundcloud.com/user-609054165/idea-tank-podcast-airbnb-and-podcasts-001","https://www.youtube.com/watch?v=zXTLksj5Y5U&t=267s"),
					makeEpisode(2,"#2 - Used Cars, iMagazine, Cookbooks, Yo Dawgz","https://itunes.apple.com/us/podcast/2-used-cars-flow-chart-cookbooks-and-yo-dawgz-where-you-at/id1232072791?i=1000385819890&mt=2","https://soundcloud.com/user-609054165/idea_tank_002_final","https://www.youtube.com/watch?v=YYc2b_P84ME&t=938s"),
					makeEpisode(3,"#3 - iPublish and the Waffle Kingdom","https://itunes.apple.com/us/podcast/3-ipublish-and-waffle-kingdom/id1232072791?i=1000386077899&mt=2","https://soundcloud.com/user-609054165/3-ipublish-and-waffle-kingdom","https://www.youtube.com/watch?v=dKgtoTe0Jo8"),
					makeEpisode(4,"#4 - Education Rant, Adding Wisdom, Removing Fear, and North Korea","https://itunes.apple.com/us/podcast/4-education-rant-adding-wisdom-removing-fear-north/id1232072791?i=1000386439094&mt=2","https://soundcloud.com/user-609054165/4-education-rant-adding-wisdom-removing-fear-and-north-korea","https://www.youtube.com/watch?v=vJC_JX_WSy4"),
					makeEpisode(5,"#5 - YouTube Video and Channel Ideas, plus Michael Bay","https://itunes.apple.com/us/podcast/5-youtube-video-and-channel-ideas-plus-michael-bay/id1232072791?i=1000386736085&mt=2","https://soundcloud.com/user-609054165/6-youtube-video-and-channel-ideas-plus-michael-bay","https://www.youtube.com/watch?v=9kN_dKCVGk8"),
					makeEpisode(6,"#6 - Value Triangle - Foundational Principle ","https://itunes.apple.com/us/podcast/6-value-triangle/id1232072791?i=1000389061451&mt=2","https://soundcloud.com/user-609054165/6-value-triangle","https://www.youtube.com/watch?v=5K95sDwVj_U")
				];
	
	buildEpisodes(total);
}

function buildEpisodes(total){
	$( "#episodes" ).append("<iframe width=\"100%\" height=\"600\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/331833463&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false\"></iframe>");


	for (var i = 0; i < total.length; i++) {
//			$( "#episodesRow" ).append( "<div class=\"col-md-4 col-sm-12 portfolio-item\"><div><a href=\"total[i].itunesLink\" class=\"fa fa-podcast fa-2x\"></a><a href=\"total[i].soundCloudLink\" class=\"fa fa-soundcloud fa-2x\"></a><a href=\"total[i].youTubeLink\" class=\"fa fa-youtube fa-2x\"></a></div><div class=\"portfolio-caption\"><p class=\"text-muted\">" + total[i].title + "</p></div></div>" );
			//$( "#episodes" ).append( "<div id=\"episodesRow\" class=\"row\"><div class=\"col-xs 6 col-sm-5 col-md-4 portfolio-item\" style=\"align-items: right;\"><a href=\"total[i].itunesLink\" class=\"fa fa-podcast fa-2x\"></a><a href=\"total[i].soundCloudLink\" class=\"fa fa-soundcloud fa-2x\"></a><a href=\"total[i].youTubeLink\" class=\"fa fa-youtube fa-2x\"></a></div><div class=\"col-xs 6 col-sm-7 col-md-8 portfolio-item\"><span class=\" portfolio-caption text-muted\">" + total[i].title + "</span></div></div>");
			//$( "#episodes" ).append("<div id=\"episodesRow\" class=\"row\"><div class=\"col-md-4 col-xs-6 portfolio-item\"><a href=\"total[i].itunesLink\" class=\"fa fa-podcast fa-2x\"></a><a href=\"total[i].soundCloudLink\" class=\"fa fa-soundcloud fa-2x\"></a><a href=\"total[i].youTubeLink\" class=\"fa fa-youtube fa-2x\"></a><div class=\"portfolio-caption\"><h4><a href=\"total[i].itunesLink\" class=\"fa fa-podcast fa-2x\"></a>" + total[i].title + "</h4></div></div></div>");
			//$( "#episodes" ).append("<div id=\"episodesRow\" class=\"row\"><div class=\"col-md-4 col-xs-6 portfolio-item\"><div class=\"portfolio-caption\"><a href=\"total[i].itunesLink\" class=\"fa fa-podcast fa-2x\"></a><a href=\"total[i].soundCloudLink\" class=\"fa fa-soundcloud fa-2x\"></a><a href=\"total[i].youTubeLink\" class=\"fa fa-youtube fa-2x\"></a><h4>" + total[i].title + "</h4></div></div></div>");
			//$( "#episodes" ).append("<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + "323323812" + "&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false\"></iframe>");
	};
}