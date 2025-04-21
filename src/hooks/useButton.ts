import { useEffect, useState } from "react";

const useButton = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [countLiked, setCountLiked] = useState(0);

    useEffect(() => {
        localStorage.setItem('countLiked', countLiked.toString());
    }, [countLiked]);

    const handleLike = () => {
        if (isDisliked) {
            setIsDisliked(false); 
        }
        setIsLiked(!isLiked);
        setCountLiked(countLiked === 0 ? 1 : 0);
    }
     
    const handleDislike = () => {
        if (isLiked) {
            setIsLiked(false); 
        }
        setIsDisliked(!isDisliked); 
        setCountLiked(countLiked === 1 ? 0 : 0);
    } 
    return {isLiked, isDisliked, countLiked, handleLike, handleDislike};
}

export default useButton;
