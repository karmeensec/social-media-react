import "./share.css";
import {PermMedia, LocationOn, LocalOffer, EmojiEmotions} from "@material-ui/icons";

export default function Share() {
    return (
        <div className = "share">
            <div className="shareWrapper">

                <div className="shareTop">
                    <img src="assets/person/person3.jpg" alt="" className = "shareProfileImg" />
                    <input placeholder = "What's in your mind?" className = "shareInput" />
                </div>

                <hr className = "shareHr" />

                <div className="shareBottom">

                    <div className="shareOptions">

                        <div className="shareOption">
                            <PermMedia htmlColor = "#A93226" className = "shareIcon" />
                            <span className = "shareOptionText" >Photo or Video</span>
                        </div>

                        <div className="shareOption">
                            <LocationOn htmlColor = "#1E8449" className = "shareIcon" />
                            <span className = "shareOptionText" >Location</span>
                        </div>

                        <div className="shareOption">
                            <LocalOffer htmlColor = "#1F618D" className = "shareIcon" />
                            <span className = "shareOptionText" >Tag</span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotions htmlColor = "#B7950B" className = "shareIcon" />
                            <span className = "shareOptionText" >Feelings</span>
                        </div>

                    </div>

                    <button className = "shareButton" >Share</button>
                    
                </div>

            </div>
        </div>
    )
}
