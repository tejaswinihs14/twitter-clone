import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState( "" ); 
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Tejaswini',
            username: 'tejaswinihs',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://media2.giphy.com/media/l2JhpzLiWX4N4Mpag/giphy.gif?cid=ecf05e47d9d6d65c8cd2a81ed9fbfabd69fa1903c7e0a3cf&rid=giphy.gif"
               });
               setTweetMessage("");
               setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://images.unsplash.com/photo-1598049124124-762545fedc8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></Avatar>
                    <input onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?" type="text"></input>
                    </div> 
                    <input 
                     value={tweetImage}
                     onChange={(e) => setTweetImage(e.target.value)}
                     className="tweetbox__inputimage" placeholder="optional:Enter image URL" type="text"></input>
                    <Button onClick={sendTweet} type="submit" className="tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
