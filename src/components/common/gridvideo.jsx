import { useState } from "react";

export const GridVideo = () => {
    const [isReadyToPlay, setIsReadyToPlay] = useState(false);

    // This function triggers when the user clicks to play the videos
    const handleUserInteraction = () => {
        setIsReadyToPlay(true);
    };

    return (
        <div className="gridVideo" onClick={handleUserInteraction}>
                <div className="gridVideo__div1">
                    <video src="/Nodo.mp4" autoPlay loop muted playsInline>
                        {isReadyToPlay && <source src="/Nodo.mp4" type="video/mp4" />}
                    </video>
                </div>
                <div className="gridVideo__div2">
                    <div className="div1">
                        <video src="/Nodo.mp4" autoPlay loop muted playsInline>
                            {isReadyToPlay && <source src="/Nodo.mp4" type="video/mp4" />}
                        </video>
                    </div>
                    <div className="div2">
                        <video src="/Nodo.mp4" autoPlay loop muted playsInline>
                            {isReadyToPlay && <source src="/Nodo.mp4" type="video/mp4" />}
                        </video>
                    </div>
                    <div className="div3">
                        <video src="/Nodo.mp4" autoPlay loop muted playsInline>
                            {isReadyToPlay && <source src="/Nodo.mp4" type="video/mp4" />}
                        </video>
                    </div>
                    <div className="div4">
                        <video src="/Nodo.mp4" autoPlay loop muted playsInline>
                            {isReadyToPlay && <source src="/Nodo.mp4" type="video/mp4" />}
                        </video>
                    </div>
                </div>
                <div className="gridVideo__div3">
                    <video src="/Nodo.mp4" autoPlay loop muted playsInline>
                        {isReadyToPlay && <source src="/Nodo.mp4" type="video/mp4" />}
                    </video>
                </div>
        </div>
    );
};
