import React from "react";
import './news.scss'
import Card from '../home-card/cards/card'
import n1 from '../../../images/n1.png'
import n2 from '../../../images/n2.png'
import n3 from '../../../images/n3.png'
import n4 from '../../../images/n4.png'
import n5 from '../../../images/n5.png'
import n6 from '../../../images/n6.png'
import n7 from '../../../images/n7.png'
import n8 from '../../../images/n8.png'
import n9 from '../../../images/n9.png'
import n10 from '../../../images/n10.png'
import n11 from '../../../images/n11.png'
import n12 from '../../../images/n12.png'

export default function News(){
    return(
        <div className="news">
            <div className="news-text">
                News
            </div>
            <div className="all-news">
                <div className="row">
                <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n2} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">According to Deadline, Marvel Studios has launched the development of a comic book "Thunderbolts" about the supervillain team!🤯</div>
                       <div className="new-main">The project will be directed by Jake Schreier. The Thunderbolts will tell the story of a group of former supervillains hired by the US government to carry out secret tasks.</div>
                       <p className="n-p">June 10, 2022</p>
                    </div>
                   </div>
               </Card>    
               <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n1} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">The first trailer of Black Adam was released!🔥</div>
                       <div className="new-main">Short storyline: Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods-and imprisoned just as quickly-Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world. The film is released in cinemas on October 21, 2022.</div>
                       <a className="n-a" target="_blank" href="https://www.youtube.com/watch?v=X0tOpBuYasI">https://www.youtube.com/watch?v=X0tOpBuYasI</a>
                       <p className="n-p">June 9, 2022</p>
                    </div>
                   </div>
               </Card>
               </div>
               <div className="row">
               <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n3} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">The "Top Gun: Maverick" triquel may well happen!🔥</div>
                       <div className="new-main">🤑All because of the incredible success of the sequel, which surprised the producers themselves.</div>
                       <p className="n-p">June 8, 2022</p>
                    </div>
                   </div>
               </Card>
               <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n4} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">The creators of the series Matt and Ross Duffer have confirmed that in the fifth season of the series "Stranger Things" there will be leaps in time!😱</div>
                       <div className="new-main"></div>
                       <p className="n-p">June 8, 2022</p>
                    </div>
                   </div>
               </Card>
               </div>
               <div className="row">
               <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n5} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">Official: The working title of the Joker sequel has been announced! 🃏</div>
                       <div className="new-main">In his Instagram, Todd Phillips posted a cover of a screenplay called "The Joker: Common Madness." The director also shared a photo of Joaquin Phoenix reading the script.</div>
                       <p className="n-p">June 8, 2022</p>
                    </div>
                   </div>
               </Card>
               <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n6} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">Kevin Feige, Iman Vellani and the show's producer remind that the premiere of "Ms. Marvel" has already taken place at Disney +! ⚡️</div>
                       <div className="new-main">Short storyline: New Jersey raised Kamala Khan learns that she has polymorphous powers.</div>
                       <a className="n-a" target="_blank" href="https://disneyplusoriginals.disney.com/show/ms-marvel">https://disneyplusoriginals.disney.com/show/ms-marvel</a>
                       <p className="n-p">June 8, 2022</p>
                    </div>
                   </div>
               </Card>
               </div>
               <div className="row">
               <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n7} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">The trailer for the  "Minions" sequel has appeared online!🍌</div>
                       <div className="new-main"></div>
                       <a className="n-a" target="_blank" href="https://www.youtube.com/watch?v=8gXYIJCLQMI">https://www.youtube.com/watch?v=8gXYIJCLQMI</a>
                       <p className="n-p">June 7, 2022</p>
                    </div>
                   </div>
               </Card>
               <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n8} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">The first reviews of the Jurassic World Triquel are quite mixed!🦕</div>
                       <div className="new-main">Critics differ from "screaming entertainment" to "nonsense". It will be recalled that Dominion will be released worldwide on June 11.</div>
                       <p className="n-p">June 7, 2022</p>
                    </div>
                   </div>
               </Card>
               </div>
               <div className="row">
               <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n9} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">Fresh poster for the mini-series "I am Groot". The release will take place at Disney + August 10!🌱</div>
                       <div className="new-main"></div>
                       <p className="n-p">June 5, 2022</p>
                    </div>
                   </div>
               </Card>
               <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n10} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">It is reported that Warner Bros. conducted a series of test screenings of the movie "Flash" and the comic was very well received by the audience! 🍿</div>
                       <div className="new-main"></div>
                       <p className="n-p">June 4, 2022</p>
                    </div>
                   </div>
               </Card>
               </div>
               <div className="row">
               <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n11} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">According to MakingStarWars, Lucasfilm is already planning the second season of "Obi-Wan Kenobi"!🤔</div>
                       <div className="new-main"></div>
                       <p className="n-p">June 4, 2022</p>
                    </div>
                   </div>
               </Card>
               <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n12} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">Happy Birthday, Tom Holland!🥳</div>
                       <div className="new-main">Tom Holland is celebrating his 26!</div>
                       <p className="n-p">June 1, 2022</p>
                    </div>
                   </div>
               </Card>
               </div>
            </div>
            <div className="end-n-text">
            Complementing...
            </div>
        </div>
    )
} 































{/* <Card class="card-n">
                   <div className="news-card">
                       <div className="new-image"><img src={n4} alt="new" className="n"/></div>
                       <div className="new-container">
                       <div className="new-title">Happy Birthday, Tom Holland!</div>
                       <div className="new-main">Tom Holland is celebrating his 26!</div>
                       <p className="n-p">June 1, 2022</p>
                    </div>
                   </div>
               </Card> */}