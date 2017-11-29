import { Article } from './shared/article';
import { News } from './shared/news';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  news: News;
  article: Article;
  url: string = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=5515e583de1f4b30bfe794dd62f5e80d';
  constructor(private http: Http) {
    this.getNews();
  }
  getNews() {
    this.http.get(this.url)
      .subscribe((data) => {
        console.log(data.json());
        this.news = data.json();

      })
  }
  selectNew(art) {
    this.article = art;
  }
  ngOnInit() {

    //this.getNews();


    /* { 
      status: "ok",
      source: "techcrunch",
      sortBy: "top",
      articles: [{
        author: "Sarah Perez",
        title: "Cyber Monday topped Prime Day to become Amazon’s biggest shopping day ever",
        description: "On the heels of record holiday sales over the Black Friday through Cyber Monday timeframe, Amazon announced this morning that Cyber Monday was the biggest..",
        url: "https://techcrunch.com/2017/11/29/cyber-monday-topped-prime-day-to-become-amazons-biggest-shopping-day-ever/",
        urlToImage: "https://tctechcrunch2011.files.wordpress.com/2015/07/shutterstock_197269526.jpg",
        publishedAt: "2017-11-29T14:37:25Z"
      }, {
        author: "Anthony Ha",
        title: "All of Marvel’s heroes come together in the first trailer for ‘Avengers: Infinity War’",
        description: "If you were wondering whether Marvel could make a super team-up bigger than The Avengers, the new trailer for Avengers: Infinity War suggests that the answer..",
        url: "https://techcrunch.com/2017/11/29/all-of-marvels-heroes-come-together-in-the-first-trailer-for-avengers-infinity-war/",
        urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/11/avengers-infinity-war.jpeg",
        publishedAt: "2017-11-29T14:26:41Z"
      }, {
        author: "Ron Miller",
        title: "NFL teams with AWS on statistics package driven by machine learning",
        description: "The NFL is joining Major League Baseball as an AWS customer, announcing a deal today to provide real-time statistics running on AWS. The tool is part of the..",
        url: "https://techcrunch.com/2017/11/29/nfl-teams-with-aws-on-statistics-package-driven-by-machine-learning/",
        urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/11/screenshot-2017-11-29-09-04-19.png",
        publishedAt: "2017-11-29T14:17:12Z"
      }, {
        author: "Josh Constine",
        title: "Snapchat starts algorithm-personalized redesign splitting social and media",
        description: "By putting best friends first and dividing them from professional publishers, Snapchat hopes to conquer Instagram and revive its own growth with a big..",
        url: "https://techcrunch.com/2017/11/29/snapchat-redesign/",
        urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/11/snapchat-redesign.png",
        publishedAt: "2017-11-29T14:00:58Z"
      }]
    } */
  }
}
