import React from "react";
import useButton from "../hooks/useButton";

const Button = () => {
    const { isLiked, isDisliked, countLiked, handleLike, handleDislike } = useButton();

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <button onClick={handleLike}>
                {isLiked ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M720-120H320v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h218q32 0 56 24t24 56v80q0 7-1.5 15t-4.5 15L794-168q-9 20-30 34t-44 14ZM240-640v520H80v-520h160Z" /></svg> : <span className="material-symbols-outlined">
                    thumb_up
                </span>}
            </button>
            <p>{countLiked}</p>
            <button onClick={handleDislike}>
                {isDisliked ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-840h400v520L360-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 1.5-15t4.5-15l120-282q9-20 30-34t44-14Zm480 520v-520h160v520H720Z" /></svg> : <span className="material-symbols-outlined">
                    thumb_down
                </span>}
            </button>
        </div>
    );
};

export default Button;
