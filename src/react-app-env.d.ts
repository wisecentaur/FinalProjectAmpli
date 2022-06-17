/// <reference types="react-scripts" />

interface IJSWindow {
	google: any;
}

interface ISidebarButton {
	buttonText: string;
	getPath: (...args) => string;
}




interface IUserInfo {
	nickname:string;
	favoritefilm:string;
	favoritegenres:string;
	favoriteactor:string;
}

interface ITag{
	tagName:string;
}

interface IMyopinion{
	author: string;
	imdburl: string;
	main: string;
	mymark: string;
	title: string;
}

interface ICast{
	Actors: string;
	Writers: string;
	Director: string;
}

interface IFilm{
	Cast: ICast;
	Myopinion: IMyopinion;
	Boxoffice: string;
	Budget: string;
	Filminglocations: string;
	Genres: string;
	MPR: string;
	Productioncompanies: string;
	Releasedate: string;
	Runtime: string;
	Storyline: string;
	Titleimage: string;
	dislikes: number;
	likes: number;
    name: string;
	image: string;
}

