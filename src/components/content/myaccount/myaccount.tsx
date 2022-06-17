import React from "react";
import './myaccount.scss'
import editingimg from '../../../images/pencil.png'

export default function Myaccount(){
    return(
        <div className="myaccount">
            <div className="ma-t">
                My Account(Demo)
            </div>
            <div className="ma">
                <div className="ma-c">
                <hr></hr>    
                <div className="all-d"><div className="data-1">Nickname: </div><div className="data">@ABC;</div></div>
                <hr></hr>
                <div className="all-d"><div className="data-1">Favorite Film: </div><div className="data">"Avengers: Endgame", "Batman";</div><div className="editing"><img src={editingimg} className="edit"/></div></div>
                <hr></hr>
                <div className="all-d"><div className="data-1">Favorite Serial: </div><div className="data">"Stranger Things";</div><div className="editing"><img src={editingimg} className="edit"/></div></div>
                <hr></hr>
                <div className="all-d"><div className="data-1">Favorite Cartoon: </div><div className="data">"Minions";</div><div className="editing"><img src={editingimg} className="edit"/></div></div>
                <hr></hr>
                <div className="all-d"><div className="data-1">Favorite Actor: </div><div className="data">Dwayne Johnson, Tom Cruise, Johnny Depp;</div><div className="editing"><img src={editingimg} className="edit"/></div></div>
                <hr></hr>
                <div className="all-d"><div className="data-1">Favorite Genres: </div><div className="data">thriller, action, detective;</div><div className="editing"><img src={editingimg} className="edit"/></div></div>
                <hr></hr>
                <div className="all-d"><div className="data-1">Awards: </div><div className="data">discussant(wrote 137 comments), optimist(average movie rating 8.5);</div></div>
                <hr></hr>
                <div className="all-d"><div className="data-1">Likes/Dislikes/Comments: </div><div className="data">678/69/137;</div></div>
                <hr></hr>
                <div className="all-d"><div className="data-1">Status: </div><div className="data">User(<a className="cr-g" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=cSRfBSHsqxdpdjbvtKxFlGfjTlphRfTgQSKfcjfxHjxqlBvVhdDcFvcmzQrHcLpHJjXxVjzBHwPtrnnWvvbLFVnKfvWTmKCSWMTjlDxJWZxNGKwcVgjmDzhfsxtHZMplGbGQlbvQgMKwhWtGFmqGdmZdThhFvQBq">abc@gmail.com</a>);</div></div>
                <hr></hr>
                </div>
            </div>
        </div>
    )
}  